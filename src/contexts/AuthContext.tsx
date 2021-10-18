import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../firebase";

const AuthContext = createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<object | null>(null);

  function login({ email, password }: { email: string; password: string }) {
    auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { user, login, logout };

  return (
    <>
      {!loading && (
        <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
      )}
    </>
  );
}
