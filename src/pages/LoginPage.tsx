import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  return (
    <>
      <section className="full-vh d-flex align-justify-center">
        <div className="text-center shadow p-5 bg-body rounded">
          <TextField
            className="d-block mb-5"
            label="Email"
            variant="filled"
            type="email"
          />
          <TextField
            className="d-block mb-5"
            label="Password"
            variant="filled"
            type="password"
          />
          <Button variant="contained">Login</Button>
        </div>
      </section>
    </>
  );
}
