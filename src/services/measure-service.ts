import { MeasureInterface } from '@/interfaces/models-interface/measure-interace';
import Measure from '@/models/measure';
import MeasureRepository from '@/repositories/measure-repository';
import { ValidationError } from '@/utils/validtion-error';

export default class MeasureService {
  private measureRepository: MeasureRepository;

  constructor() {
    this.measureRepository = new MeasureRepository();
  }

  async getAllMeasures(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<Measure[]> {
    try {
      const validPage = page < 1 ? 1 : page;
      const measures = await this.measureRepository.getAllMeasure(
        validPage,
        pageSize,
      );
      return measures;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async measureCount(): Promise<number> {
    try {
      const count = await this.measureRepository.measuresCount();
      return count;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getActiveMeasureByDescription(
    description: string,
  ): Promise<Measure | null> {
    try {
      const measure: Measure | null =
        await this.measureRepository.getActiveMeasureByDescription(description);

      if (!measure) {
        return null;
      }

      return measure;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async createMeasure(
    measureDTO: MeasureInterface,
  ): Promise<Measure | undefined> {
    try {
      const existDescription =
        await this.measureRepository.getMeasureByDescription(
          measureDTO.description,
        );

      if (existDescription) {
        throw new ValidationError('Medida já está em uso', 'description');
      }

      const measure = await this.measureRepository.createMeasure(measureDTO);
      return measure;
    } catch (error: any) {
      if (error instanceof ValidationError) {
        throw new ValidationError(error.message, error.field);
      }

      throw new Error('Erro ao salvar a medida');
    }
  }
}
