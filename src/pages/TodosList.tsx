import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, completeTodo } from "../redux/slices/todoSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Tooltip from "@mui/material/Tooltip";

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
      <section className="vh-100 d-flex flex-column align-items-center pt-0 pt-md-3">
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
                    <div
                      className="shadow bg-light rounded mb-4"
                      style={{ borderColor: "none" }}
                    >
                      <div className="card-body">
                        {todo.completed ? (
                          <h5 className="text-decoration-line-through card-title">
                            {todo.text}
                          </h5>
                        ) : (
                          <h5 className="card-title">{todo.text}</h5>
                        )}
                        <div className="d-flex justify-content-between mt-5">
                          <Tooltip title={todo.completed ? "Undone" : "Done"}>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                dispatch(completeTodo(todo.id));
                              }}
                            >
                              <DoneIcon />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <Button
                              variant="outlined"
                              onClick={() => {
                                dispatch(deleteTodo(todo.id));
                              }}
                            >
                              <DeleteIcon />
                            </Button>
                          </Tooltip>
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
