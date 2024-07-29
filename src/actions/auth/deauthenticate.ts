'use server';

import { logout } from '@/lib/auth';

export default async function deauthenticate(): Promise<boolean> {
  try {
    await logout();
    return true;
  } catch (error) {
    return false;
  }
}
