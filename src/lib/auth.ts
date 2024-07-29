import AuthInterface from '@/interfaces/auth-session-interface';
import UserService from '@/services/user-service';
import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const secretkey = process.env.SECRETKEY as string;
const key = new TextEncoder().encode(secretkey);
const sessionAuthName = process.env.SESSION_AUTH_NAME as string;

export async function login(
  username: string,
  password: string,
): Promise<{ success: boolean; message: string }> {
  try {
    const userService = new UserService();
    const user = await userService.getActiveUserByUsername(username);

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    const isAuthorized = await comparePassword(password, user.password);

    if (!isAuthorized) {
      throw new Error('Credenciais inválidas');
    }

    const authDTO: AuthInterface = {
      email: user.email,
      name: user.name,
      username: user.username,
    };

    await createSession(authDTO);

    return { success: true, message: 'Autenticação bem-sucedida' };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function logout() {
  cookies().set(sessionAuthName, '', { expires: new Date(0) });
}

export async function createSession(auth: AuthInterface) {
  try {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ auth, expires });
    cookies().set(sessionAuthName, session, {
      expires,
      httpOnly: true,
    });
  } catch (error) {
    throw new Error('Erro ao criar a sessão de login');
  }
}

export async function getSession() {
  const session = cookies().get(sessionAuthName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function comparePassword(
  userPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(userPassword, hashedPassword);
  } catch (error) {
    throw new Error('Erro ao validar a senha');
  }
}

export async function encrypt(payload: any): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function updateSession(request: NextRequest) {
  const parsed = await getSession();

  if (!parsed) return;

  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: sessionAuthName,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
