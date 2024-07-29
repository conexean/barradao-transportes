'use server';

import MeasureService from '@/services/measure-service';

export default async function getAllMeasures(page: number, pageSize: number) {
  const measureService = new MeasureService();

  const totalCount: number = await measureService.measureCount();
  const totalPages = Math.ceil(totalCount / pageSize);

  const data = await measureService.getAllMeasures(page, pageSize);

  const measures = data.map((data) => ({
    id: data.id,
    description: data.description,
  }));

  return { success: true, totalPages, measures };
}
