import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {changeTokenTypes} from '../../types/tokenTypes';
type tokenType = {
  token: string | undefined;
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  } as tokenType,
  reducers: {
    setCurrentToken(state, action: PayloadAction<changeTokenTypes>) {
      state.token = action.payload.token;
    },
  },
});

export const {setCurrentToken} = tokenSlice.actions;
export default tokenSlice.reducer;
