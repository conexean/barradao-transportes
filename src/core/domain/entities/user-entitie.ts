export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
