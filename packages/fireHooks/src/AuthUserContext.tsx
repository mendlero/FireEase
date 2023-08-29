import { createContext, useContext, ReactNode } from 'react';
import useFirebaseAuth from './useAuthUser';
import { Auth } from 'firebase/auth';

const authUserContext = createContext<ReturnType<typeof useFirebaseAuth>>(null);

export function AuthUserProvider({
  children,
  auth,
}: {
  children: ReactNode;
  auth: Auth;
}) {
  const authUser = useFirebaseAuth(auth);
  return (
    <authUserContext.Provider value={authUser}>
      {children}
    </authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export function useAuthContext() {
  return useContext(authUserContext);
}
