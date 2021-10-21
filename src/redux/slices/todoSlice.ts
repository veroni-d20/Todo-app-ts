import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [
  {
    id: 10,
    text: "Do assignment",
    completed: false,
  },
  { id: 11, text: "Play football", completed: false },
  { id: 12, text: "Eat, sleep, repeat", completed: false },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id:
          state.length > 0 ? state[state.length - 1].id + 1 : state.length + 1,
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
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

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
