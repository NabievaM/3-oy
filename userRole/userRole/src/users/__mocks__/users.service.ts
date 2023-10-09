import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockReturnValue({
  createUser: jest.fn().mockResolvedValue(userStub()),
  getOneUser: jest.fn().mockResolvedValue(userStub()),
  getAllUsers: jest.fn().mockResolvedValue([userStub()]),
  deleteUser: jest
    .fn()
    .mockResolvedValue({ message: "Foydalanuvchi o'chirildi" }),
});
