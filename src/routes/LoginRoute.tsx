import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginRoute(props: any) {
  const Component = props.component;
  const { user } = useAuth();

  return <>{user ? <Redirect to="/home" /> : <Component />}</>;
}
