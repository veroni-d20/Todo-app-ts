import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, completeTodo } from "../redux/todoSlice";

export default function TodosList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  let size = 2;
  let arrayOfArrays = [];

  for (let i = 0; i < todos.length; i += size) {
    arrayOfArrays.push(todos.slice(i, i + size));
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        {arrayOfArrays.map((chunk, index) => (
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
                      <h5 className="card-title">todo.text</h5>
                    )}
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
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
