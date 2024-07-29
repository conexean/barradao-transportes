import bcrypt from 'bcrypt';

const comparePasswords = async (
  userPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(userPassword, hashedPassword);
  } catch (error) {
    return false;
  }
};

export default comparePasswords;
