import { MeasureInterface } from '@/application/interfaces/models-interface/measure-interace';

export interface IMeasure extends MeasureInterface {
  id: number;
  active: boolean;
}

export default class Measure {
  private props: IMeasure;

  constructor(props: IMeasure) {
    this.props = props;
  }

  public get id(): number | undefined {
    return this.props.id;
  }

  public get description(): string {
    return this.props.description;
  }

  public get active(): boolean {
    return this.props.active;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set id(id: number) {
    this.props.id = id;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public set active(active: boolean) {
    this.props.active = active;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
