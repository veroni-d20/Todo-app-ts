import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { login } = useAuth();

  async function handleLogin() {
    setLoading(true);
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    try {
      await login(email, password);
    } catch {
      setError("Invalid email or password");
      setLoading(false);
    }
  }

  return (
    <>
      <main className="d-flex flex-column flex-md-row">
        <section className="vh-25 vh-md-100 d-flex align-justify-center w-100 w-md-50">
          <h1 className="">To Do App</h1>
        </section>
        <section className="d-flex flex-column flex-md-row align-justify-center">
          <div className="text-center shadow p-5 bg-body rounded">
            <TextField
              inputRef={emailRef}
              className="mb-5"
              label="Email"
              variant="filled"
              type="email"
            />
            <br />
            <TextField
              inputRef={passwordRef}
              className="mb-5"
              label="Password"
              variant="filled"
              type="password"
            />
            <br />
            {error && <p className="text-danger">{error}</p>}
            <LoadingButton
              loading={loading}
              variant="contained"
              size="large"
              onClick={handleLogin}
              type="button"
            >
              Login
            </LoadingButton>
          </div>
        </section>
      </main>
    </>
  );
}
