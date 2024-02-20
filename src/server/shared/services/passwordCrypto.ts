import { compare, genSalt, hash } from 'bcryptjs';

const SALT_RANDOMS = 8;
const hashPassword = async (password: string) => {
  const saltGenerated = await genSalt(SALT_RANDOMS);
  return await hash(password, saltGenerated);
};
/**
 * @param password
 * @param hashPassword
 * @returns truel valid or false invalid password
 */
const verifyPassword = async (password: string, hashPassword: string) => {
  return await compare(password, hashPassword);
};

export const PassswordCryto = {
  hashPassword,
  verifyPassword,
};
