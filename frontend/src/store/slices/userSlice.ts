import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: {
    passwordResetMail: string,
    isLoggedIn: boolean,
    name: string,
    email: string,
    telephone: string,
  };
};

const initialState = {
  passwordResetMail: '',
  isLoggedIn: false,
  name: '',
  email: '',
  telephone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPasswordResetMail: (state, action: PayloadAction<string>) => {
      state.passwordResetMail = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setTelephone: (state, action: PayloadAction<string>) => {
      state.telephone = action.payload;
    },
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
    },
    resetUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setPasswordResetMail,
  setEmail,
  setName,
  setTelephone,
  loggedIn,
  loggedOut,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;