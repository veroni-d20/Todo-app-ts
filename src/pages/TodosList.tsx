import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, completeTodo } from "../redux/slices/todoSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../components/SearchBar";

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

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  return (
    <>
      <section className="vh-100 d-flex flex-column align-items-center pt-0 pt-md-3">
        <div className="mb-4" style={{ width: "97%" }}>
          <AppBar position="static">
            <Toolbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Search Todo"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
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
                              {todo.completed ? <UndoIcon /> : <DoneIcon />}
                            </Button>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <Button
                              color="secondary"
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
