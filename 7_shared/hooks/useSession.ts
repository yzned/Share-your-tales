import {useReactiveVar} from '@apollo/client';
import {useEffect} from 'react';

import {client} from '../api';
import {tokenPersistedVar} from '../api/apollo/variable';

export const useSession = () => {
  const token = useReactiveVar(tokenPersistedVar.getReactiveVar());

  const checkSession = () => {
    if (!token) {
      return;
    }
  };

  useEffect(checkSession, []);

  return {token};
};

export const signOut = () => {
  tokenPersistedVar.setReactiveValue(undefined);

  client.clearStore();
};
