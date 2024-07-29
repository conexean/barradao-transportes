import { MeasureInterface } from '@/interfaces/models-interface/measure-interace';
import prisma from '@/lib/prisma';
import Measure from '@/models/measure';

export default class MeasureRepository {
  async getAllMeasure(validPage: number, pageSize: number): Promise<Measure[]> {
    try {
      const measures = await prisma.measure.findMany({
        skip: (validPage - 1) * pageSize,
        take: pageSize,
        orderBy: {
          id: 'desc',
        },
      });

      return measures.map((measure) => new Measure(measure));
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async measuresCount(): Promise<number> {
    try {
      const count = await prisma.measure.count();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveMeasureByDescription(
    description: string,
  ): Promise<Measure | null> {
    try {
      const measure = await prisma.measure.findUnique({
        where: { description: description, active: true },
      });

      return measure ? new Measure(measure) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getMeasureByDescription(description: string): Promise<Measure | null> {
    try {
      const measure = await prisma.measure.findUnique({
        where: { description: description },
      });

      return measure ? new Measure(measure) : null;
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }

  async getMeasureByID(id: number): Promise<Measure | null> {
    try {
      const measure = await prisma.measure.findUnique({
        where: { id: id },
      });

      return measure ? new Measure(measure) : null;
    } catch (error) {
      throw new Error('Erro ao buscar registro pelo ID');
    }
  }

  async createMeasure(
    measureDTO: MeasureInterface,
  ): Promise<Measure | undefined> {
    try {
      const createdMeasure = await prisma.measure.create({
        data: measureDTO,
      });
      return new Measure(createdMeasure);
    } catch (error) {
      throw new Error('Erro na comunicação com banco de dados');
    }
  }
}
