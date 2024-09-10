import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { PrismaClient } from "@prisma/client";
import { UserRepository } from "@domain/repositories/user-repository";
import { PrismaUserRepository } from "@infrastructure/repositories/user-repository";
import { CreateUser } from "@domain/usecases/user/create-user-usecase";
import { GetUserById } from "@domain/usecases/user/get-user-by-id-usecase";
import { GetUserByEmail } from "@domain/usecases/user/get-user-by-email-usecase";
import { UpdateUser } from "@domain/usecases/user/update-user-usecase";
import { UpdateUserPassword } from "@domain/usecases/user/update-user-password-usecase";
import { DeleteUser } from "@domain/usecases/user/delete-user-usecase";

import prisma from "@infrastructure/datasources/prisma-datasource";
import { UserFactory } from "@domain/factories/user-factory";

const container = new Container();

container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(prisma);

// Factories
container.bind<UserFactory>(TYPES.UserFactory).to(UserFactory);

// Repositories
container.bind<UserRepository>(TYPES.UserRepository).to(PrismaUserRepository);

// Use Cases
container.bind<CreateUser>(TYPES.CreateUserUseCase).to(CreateUser);
container.bind<GetUserById>(TYPES.GetUserByIdUseCase).to(GetUserById);
container.bind<GetUserByEmail>(TYPES.GetUserByEmailUseCase).to(GetUserByEmail);
container.bind<UpdateUser>(TYPES.UpdateUserUseCase).to(UpdateUser);
container
  .bind<UpdateUserPassword>(TYPES.UpdateUserPasswordUseCase)
  .to(UpdateUserPassword);
container.bind<DeleteUser>(TYPES.DeleteUserUseCase).to(DeleteUser);

export { container };
