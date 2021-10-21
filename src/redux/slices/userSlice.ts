import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const initialState: User[] = [
  {
    id: 1,
    firstName: "Veroni",
    lastName: "Shwetha",
  },
];

const userSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    getUser: () => {},
    setUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
