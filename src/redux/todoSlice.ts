import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [
  {
    id: 1,
    text: "Do assignment",
    completed: false,
  },
  { id: 2, text: "Eat, sleep, repeat", completed: false },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.length + 1,
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
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
