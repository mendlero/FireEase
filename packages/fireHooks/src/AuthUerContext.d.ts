import { Auth, User } from 'firebase/auth';
import { ReactNode } from 'react';

export function AuthUserProvider({
  children,
  auth,
}: {
  children: ReactNode;
  auth: Auth;
}): React.JSX.Element;

export const useAuthContext = () => User | null;
