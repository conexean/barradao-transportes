'use server';

import formatError from '@/constants/format-error';
import { VehicleCategoryInterface } from '@/application/interfaces/models-interface/vehicle-category';
import vehicleCategorySchema from '@/schemas/vehicle-category-schema';
import VehicleCategoryService from '@/services/vehicle-category-service';
import { SubmitFormAction } from '@/types/form-types';
import { ValidationError } from '@/utils/validtion-error';

const createVehicleCategory: SubmitFormAction = async (_prevState, params) => {
  const validation = vehicleCategorySchema.safeParse(
    Object.fromEntries(params),
  );

  if (validation.success) {
    try {
      const vehicleCategoryService = new VehicleCategoryService();

      const vehicleCategoryData = validation.data;

      const vehicleCategoryDTO: VehicleCategoryInterface = {
        description: vehicleCategoryData.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await vehicleCategoryService.createVehicleCategory(vehicleCategoryDTO);

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
        errors: [formatError('Erro desconhecido ao cadastar categoria')],
      };
    }
  } else {
    return {
      success: false,
      errors: validation.error.issues,
    };
  }
};

export default createVehicleCategory;
