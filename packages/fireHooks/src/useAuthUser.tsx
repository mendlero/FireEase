import { User, Auth } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function useAuthUser(auth: Auth) {
  const [authUser, setAuthUser] = useState<User | null>(null);

  const authStateChanged = (authState: User | null) => {
    if (!authState) {
      setAuthUser(null);
      return;
    }

    setAuthUser(authState);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return authUser;
}
