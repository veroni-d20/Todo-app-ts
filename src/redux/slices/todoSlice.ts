import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: ITodo[] = [
  {
    id: 12,
    text: "Do assignment",
    completed: false,
  },
  { id: 11, text: "Play football", completed: false },
  { id: 10, text: "Eat, sleep, repeat", completed: false },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    getTodo: () => {},

    setTodo: (state, action: PayloadAction<ITodo[]>) => {
      const { payload } = action;
      payload.map((newTodo) => state.unshift(newTodo));
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: state.length > 0 ? state[0].id + 1 : state.length + 1,
        text: action.payload,
        completed: false,
      };
      state.unshift(newTodo);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.map(
        (st) => st.id === action.payload && state.splice(state.indexOf(st), 1)
      );
    },

    completeTodo: (state, action: PayloadAction<number>) => {
      state.map(
        (st) =>
          st.id === action.payload &&
          (st.completed === true
            ? (st.completed = false)
            : (st.completed = true))
      );
    },
  },
});

export const { getTodo, setTodo, addTodo, deleteTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
