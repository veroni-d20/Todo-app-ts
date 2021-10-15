import { useRef } from "react";
import TodosList from "./TodosList";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function LandingPage() {
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
            <h1 className="mt-xs-3 mt-md-0">To Do App</h1>
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
                id="todo-button"
                onClick={handleSubmit}
              >
                Add ToDo
              </button>
            </div>
          </div>
        </section>
        <section className="w-100 mt-xs-3 mt-md-0">
          <TodosList />
        </section>
      </main>
    </>
  );
}
