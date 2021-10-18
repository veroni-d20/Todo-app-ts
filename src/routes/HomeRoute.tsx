import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function HomeRoute(props: any) {
  const Component = props.component;
  const { user } = useAuth();

  return <>{user ? <Component /> : <Redirect to="/" />}</>;
}
