import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, completeTodo } from "../redux/slices/todoSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function TodosList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [todoList, setTodoList] = useState(todos);

  let size = 2;
  let arrayOfArrays = [];

  for (let i = 0; i < todoList.length; i += size) {
    arrayOfArrays.push(todoList.slice(i, i + size));
  }

  function handleChange(searchedVal: string | null) {
    if (searchedVal === "" || searchedVal === null) {
      setTodoList(todos);
    } else {
      const filteredTodos = todos.filter((row) =>
        row.text.toLowerCase().includes(searchedVal.toLowerCase())
      );
      setTodoList(filteredTodos);
    }
  }

  const flatProps = {
    options: todos.map((option) => option.text),
  };

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  return (
    <>
      <section className="vh-100 d-flex flex-column align-items-center pt-3">
        <div className="mb-4" style={{ width: "50vw" }}>
          <Autocomplete
            onChange={(e, v) => handleChange(v)}
            {...flatProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Search Todo" variant="standard" />
            )}
          />
        </div>
        <div
          className="container-fluid scroll-bar"
          style={{ maxHeight: "85vh", overflowY: "auto" }}
        >
          {arrayOfArrays.length > 0 ? (
            arrayOfArrays.map((chunk, index) => (
              <div className="row" key={index}>
                {chunk.map((todo) => (
                  <div className="col-md-6" key={todo.id}>
                    <div className="card mb-4">
                      <div className="card-body">
                        {todo.completed ? (
                          <h5 className="text-decoration-line-through card-title">
                            {todo.text}
                          </h5>
                        ) : (
                          <h5 className="card-title">{todo.text}</h5>
                        )}
                        <div className="d-flex justify-content-between">
                          <button
                            className="btn btn-primary mt-2"
                            onClick={() => {
                              dispatch(completeTodo(todo.id));
                            }}
                          >
                            Done
                          </button>
                          <button
                            className="btn btn-secondary mt-2"
                            onClick={() => {
                              dispatch(deleteTodo(todo.id));
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-center">No Todos found</p>
          )}
        </div>
      </section>
    </>
  );
}
