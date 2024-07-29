'use server';

import formatError from '@/constants/format-error';
import { MeasureInterface } from '@/interfaces/models-interface/measure-interace';
import measureSchema from '@/schemas/measure-schema';
import MeasureService from '@/services/measure-service';
import { SubmitFormAction } from '@/types/form-types';
import { ValidationError } from '@/utils/validtion-error';

const createMeasure: SubmitFormAction = async (_prevState, params) => {
  const validation = measureSchema.safeParse(Object.fromEntries(params));

  if (validation.success) {
    try {
      const measureService = new MeasureService();

      const measureData = validation.data;

      const measureDTO: MeasureInterface = {
        description: measureData.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await measureService.createMeasure(measureDTO);

      return { success: true, errors: [] };
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          success: false,
          errors: [formatError(error.message, [error.field])],
        };
      }
      return {
        success: false,
        errors: [formatError('Erro desconhecido ao cadastar medida')],
      };
    }
  } else {
    return {
      success: false,
      errors: validation.error.issues,
    };
  }
};

export default createMeasure;
