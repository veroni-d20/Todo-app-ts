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
    getUser: (state, action) => {},
    setUser: (state, action: PayloadAction<object>) => {
      const userData = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
