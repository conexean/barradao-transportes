import { useState, useCallback } from 'react';

type ValidationRule<T> = (value: T) => string | true;

interface FieldConfig<T> {
  initialValue: T;
  validations: ValidationRule<T>[];
}

type FormConfig = Record<string, FieldConfig<any>>;

type ChangeEvent =
  | React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  | { name: string; value: any };

export const useForm = (config: FormConfig) => {
  const initialFormData = Object.entries(config).reduce(
    (acc, [name, field]) => {
      acc[name] = field.initialValue;
      return acc;
    },
    {} as Record<string, any>,
  );

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const validateField = useCallback(
    (name: string, value: any) => {
      const field = config[name];
      if (!field) return '';

      for (const validation of field.validations) {
        const result = validation(value);
        if (typeof result === 'string') {
          return result;
        }
      }
      return '';
    },
    [config],
  );

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = 'target' in e ? e.target : e;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  }, [formData, validateField]);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    validateForm,
  };
};
