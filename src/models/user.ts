import { UserInterface } from '@/interfaces/models-interface/user-interface';

interface IUser extends UserInterface {
  id: number;
  active: boolean;
}

export default class User {
  private props: IUser;

  constructor(props: IUser) {
    this.props = props;
  }

  public get id(): number | undefined {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get lastname(): string {
    return this.props.lastname;
  }

  public get email(): string {
    return this.props.email;
  }

  public get username(): string {
    return this.props.username;
  }

  public get password(): string {
    return this.props.password;
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

  public set name(name: string) {
    this.props.name = name;
  }

  public set lastname(lastname: string) {
    this.props.lastname = lastname;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public set username(username: string) {
    this.props.username = username;
  }

  public set password(username: string) {
    this.props.password = username;
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
