import { useRef } from "react";
import TodosList from "./TodosList";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { useAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const theValue = todoRef.current ? todoRef.current.value.trim() : "";
    if (theValue !== "" && theValue !== null) {
      dispatch(addTodo(theValue));
    }
    todoRef.current && (todoRef.current.value = "");
  };

  return (
    <>
      <main className="full-vh d-md-flex justify-content-between align-items-center mx-4">
        <section className="d-md-flex flex-md-column align-justify-center w-md-50">
          <div className="text-center text-md-start">
            <h1 className="mt-3 mt-md-0">To Do App</h1>
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
            <div className="mt-4 mt-md-5">
              <button
                className="btn btn-outline-black"
                type="button"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </section>
        <section className="w-100 mt-2 mt-md-0">
          <TodosList />
        </section>
      </main>
    </>
  );
}
