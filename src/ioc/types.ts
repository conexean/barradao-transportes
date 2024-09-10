export const TYPES = {
  PrismaClient: Symbol.for('PrismaClient'),

  // User
  UserFactory: Symbol.for('UserFactory'),
  UserRepository: Symbol.for('UserRepository'),
  CreateUserUseCase: Symbol.for('CreateUserUseCase'),
  GetUserByIdUseCase: Symbol.for('GetUserByIdUseCase'),
  GetUserByEmailUseCase: Symbol.for('GetUserByEmailUseCase'),
  UpdateUserUseCase: Symbol.for('UpdateUserUseCase'),
  UpdateUserPasswordUseCase: Symbol.for('UpdateUserPasswordUseCase'),
  DeleteUserUseCase: Symbol.for('DeleteUserUseCase'),
};
