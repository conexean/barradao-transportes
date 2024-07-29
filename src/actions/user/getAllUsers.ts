'use server';

import UserService from '@/services/user-service';

export default async function getAllUsers(page: number, pageSize: number) {
  const userService = new UserService();

  const totalCount: number = await userService.userCount();
  const totalPages = Math.ceil(totalCount / pageSize);

  const data = await userService.getAllUsers(page, pageSize);

  const users = data.map((data) => ({
    id: data.id,
    fullname: `${data.name} ${data.lastname}`,
    email: data.email,
    username: data.username,
  }));

  return { success: true, totalPages, users };
}
