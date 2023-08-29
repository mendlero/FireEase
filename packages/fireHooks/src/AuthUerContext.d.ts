import type { Auth, User } from 'firebase/auth';
import type { ReactNode } from 'react';

export function AuthUserProvider({
  children,
  auth,
}: {
  children: ReactNode;
  auth: Auth;
}): React.JSX.Element;

export function useAuthContext(): User | null;
