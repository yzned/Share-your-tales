import {createSlice} from '@reduxjs/toolkit';

type accountDataType = {
  theme: string;
  isLogin: boolean;
};

const accountDataSlice = createSlice({
  name: 'token',
  initialState: {
    theme: 'light',
  } as accountDataType,
  reducers: {
    changeIsLoginStatus(state) {
      state.isLogin = true;
    },
    leaveToAccount(state) {
      state.isLogin = false;
    },
    changeThemeToLight(state) {
      state.theme = 'light';
    },
    changeThemeToDark(state) {
      state.theme = 'dark';
    },
  },
});

export const {
  changeIsLoginStatus,
  leaveToAccount,
  changeThemeToLight,
  changeThemeToDark,
} = accountDataSlice.actions;
export default accountDataSlice.reducer;
