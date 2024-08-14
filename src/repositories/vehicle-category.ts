import { VehicleCategoryInterface } from '@/interfaces/models-interface/vehicle-category';
import prisma from '@/lib/prisma';
import VehicleCategory, { IVechicleCategory } from '@/models/vehicle-category';

export default class VehicleCategoryRepository {
  async getAllVehiclesCategories(
    validPage: number,
    pageSize: number,
  ): Promise<VehicleCategory[]> {
    try {
      const vehicleCatories = await prisma.vehicleCategory.findMany({
        skip: (validPage - 1) * pageSize,
        take: pageSize,
        orderBy: {
          id: 'desc',
        },
      });

      return vehicleCatories.map(
        (vehicleCategory: IVechicleCategory) => new VehicleCategory(vehicleCategory),
      );
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async vehicleCategoryCount(): Promise<number> {
    try {
      const count = await prisma.vehicleCategory.count();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveVehicleCategoriesByDescription(
    description: string,
  ): Promise<VehicleCategory | null> {
    try {
      const vehicleCategory = await prisma.vehicleCategory.findUnique({
        where: { description: description, active: true },
      });

      return vehicleCategory ? new VehicleCategory(vehicleCategory) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getVehicleCategoryByDescription(
    description: string,
  ): Promise<VehicleCategory | null> {
    try {
      const vehicleCategory = await prisma.vehicleCategory.findUnique({
        where: { description: description },
      });

      return vehicleCategory ? new VehicleCategory(vehicleCategory) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getVechicleCategoryByID(id: number): Promise<VehicleCategory | null> {
    try {
      const vehicleCategory = await prisma.vehicleCategory.findUnique({
        where: { id: id },
      });

      return vehicleCategory ? new VehicleCategory(vehicleCategory) : null;
    } catch (error) {
      throw new Error('Erro ao buscar registro pelo ID');
    }
  }

  async createVehicleCategory(
    vehicleCategoryDTO: VehicleCategoryInterface,
  ): Promise<VehicleCategory | undefined> {
    try {
      const createdVehicleCategory = await prisma.vehicleCategory.create({
        data: vehicleCategoryDTO,
      });
      return new VehicleCategory(createdVehicleCategory);
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }
}
