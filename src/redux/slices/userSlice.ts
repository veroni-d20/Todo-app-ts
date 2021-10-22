import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

interface IUserPayload {
  userState: boolean;
  users: IUser[];
}

const initialState: IUserPayload = {
  userState: false,
  users: [
    {
      id: 1,
      firstName: "Veroni",
      lastName: "Shwetha",
    },
  ],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser: () => {},
    setUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
