import { Fab, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SnackBar from "../components/SnackBar";
import Loader from "../components/Loader";
import TodosList from "./TodosList";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { getUser } from "../redux/slices/userSlice";
import { RootState } from "../redux/store";
import { useAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users);
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const theValue = todoRef.current ? todoRef.current.value.trim() : "";
    if (theValue !== "" && theValue !== null) {
      dispatch(addTodo(theValue));
    }
    todoRef.current && (todoRef.current.value = "");
  };

  useEffect(() => {
    dispatch(getUser());
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SnackBar user={user[1].firstName} />
          <main className="full-vh d-md-flex justify-content-between align-items-center mx-4">
            <section className="d-md-flex flex-column align-justify-center w-md-50 vh-md-100 addtodo-color">
              <div className="text-center text-md-start">
                <h1 className="mt-4 mt-md-0">To Do App</h1>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here"
                    aria-label="Todo"
                    aria-describedby="todo-button"
                    ref={todoRef}
                  />
                  <button
                    className="btn btn-outline-teal"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add ToDo
                  </button>
                </div>
              </div>
            </section>
            <section className="w-100 mt-5 mt-md-0">
              <TodosList />
            </section>
            <section className="fab-button">
              <Tooltip title="Logout">
                <Fab color="primary" aria-label="logout" onClick={logout}>
                  <LogoutIcon />
                </Fab>
              </Tooltip>
            </section>
          </main>
        </>
      )}
    </>
  );
}
