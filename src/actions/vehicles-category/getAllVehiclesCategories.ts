'use server';

import VehicleCategoryService from '@/services/vehicle-category-service';

export default async function getAllVehiclesCategories(
  page: number,
  pageSize: number,
) {
  const vehicleCategoryService = new VehicleCategoryService();

  const totalCount: number =
    await vehicleCategoryService.vehicleCategoryCount();
  const totalPages = Math.ceil(totalCount / pageSize);

  const data = await vehicleCategoryService.getAllVehicleCategories(
    page,
    pageSize,
  );

  const vehiclesCategories = data.map((data) => ({
    id: data.id,
    description: data.description,
  }));

  return { success: true, totalPages, vehiclesCategories };
}
