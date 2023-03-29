// https://expo.github.io/router/docs/guides/auth
import { useRouter, useSegments } from 'expo-router';
import React from 'react';

type User = {
  firstTime?: boolean;
} | null;

type AuthContextObj = {
  signIn: () => void;
  signOut: () => void;
  user: User;
};

const AuthContext = React.createContext<AuthContextObj>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: User) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/(auth)/signin');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/');
    }
  }, [user, segments]);
}

export function AuthProvider(props: React.PropsWithChildren) {
  const [user, setAuth] = React.useState<User>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({ firstTime: true }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
