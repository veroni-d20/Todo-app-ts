import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function handleLogin() {
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    console.log(email, password);
  }

  return (
    <>
      <section className="full-vh d-flex align-justify-center">
        <div className="text-center shadow p-5 bg-body rounded">
          <TextField
            inputRef={emailRef}
            className="d-block mb-5"
            label="Email"
            variant="filled"
            type="email"
          />
          <TextField
            inputRef={passwordRef}
            className="d-block mb-5"
            label="Password"
            variant="filled"
            type="password"
          />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </section>
    </>
  );
}
