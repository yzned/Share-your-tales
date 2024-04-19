import {RootState} from '../../store';

export const accountDataSelectors = {
  getIsLoginStatus: (state: RootState) => state.accountData.isLogin,
  getCurrentTheme: (state: RootState) => state.accountData.theme,
};
