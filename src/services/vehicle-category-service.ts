import { VehicleCategoryInterface } from '@/interfaces/models-interface/vehicle-category';
import VehicleCategory from '@/models/vehicle-category';
import VehicleCategoryRepository from '@/repositories/vehicle-category';
import { ValidationError } from '@/utils/validtion-error';

export default class VehicleCategoryService {
  private vehicleCategoryRepository: VehicleCategoryRepository;

  constructor() {
    this.vehicleCategoryRepository = new VehicleCategoryRepository();
  }

  async getAllVehicleCategories(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<VehicleCategory[]> {
    try {
      const validPage = page < 1 ? 1 : page;
      const vehiclesCategories =
        await this.vehicleCategoryRepository.getAllVehiclesCategories(
          validPage,
          pageSize,
        );
      return vehiclesCategories;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async vehicleCategoryCount(): Promise<number> {
    try {
      const count = await this.vehicleCategoryRepository.vehicleCategoryCount();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveVehicleCategoriesByDescription(
    description: string,
  ): Promise<VehicleCategory | null> {
    try {
      const vehicleCategory: VehicleCategory | null =
        await this.vehicleCategoryRepository.getActiveVehicleCategoriesByDescription(
          description,
        );

      if (!vehicleCategory) {
        return null;
      }

      return vehicleCategory;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async createVehicleCategory(
    vehicleCategoryDTO: VehicleCategoryInterface,
  ): Promise<VehicleCategory | undefined> {
    try {
      const existVehicleCategory =
        await this.vehicleCategoryRepository.getVehicleCategoryByDescription(
          vehicleCategoryDTO.description,
        );

      if (existVehicleCategory) {
        throw new ValidationError('Categoria já está em uso', 'category');
      }

      const vehicleCategory =
        await this.vehicleCategoryRepository.createVehicleCategory(
          vehicleCategoryDTO,
        );
      return vehicleCategory;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        throw new ValidationError(error.message, error.field);
      }

      throw new Error('Erro ao salvar a categoria');
    }
  }
}
