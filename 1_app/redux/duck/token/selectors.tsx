import {RootState} from '../../store';

export const tokenSelectors = {
  getToken: (state: RootState) => state.token.token,
};
