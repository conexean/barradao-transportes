import { CreateUser } from '@domain/usecases/user/create-user-usecase';
import { container } from '../container';
import { TYPES } from '../types';
import { GetUserById } from '@domain/usecases/user/get-user-by-id-usecase';
import { GetUserByEmail } from '@domain/usecases/user/get-user-by-email-usecase';
import { UpdateUser } from '@domain/usecases/user/update-user-usecase';
import { UpdateUserPassword } from '@domain/usecases/user/update-user-password-usecase';
import { DeleteUser } from '@domain/usecases/user/delete-user-usecase';

export const userModule = {
  createUserUseCase: container.get<CreateUser>(TYPES.CreateUserUseCase),
  getUserByIdUseCase: container.get<GetUserById>(TYPES.GetUserByIdUseCase),
  getUserByEmailUseCase: container.get<GetUserByEmail>(
    TYPES.GetUserByEmailUseCase,
  ),
  updateUserUseCase: container.get<UpdateUser>(TYPES.UpdateUserUseCase),
  updateUserPasswordUseCase: container.get<UpdateUserPassword>(
    TYPES.UpdateUserPasswordUseCase,
  ),
  deleteUserUseCase: container.get<DeleteUser>(TYPES.DeleteUserUseCase),
};
