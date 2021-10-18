import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "../components/Loader";

export default function HomeRoute(props: any) {
  const Component = props.component;
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user && setUser(true);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <>{loading ? <Loader /> : user ? <Component /> : <Redirect to="/" />}</>
  );
}
