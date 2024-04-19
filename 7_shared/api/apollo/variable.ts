import {makeVar} from '@apollo/client';
import {StorageKey, persistedStorageService} from '../../persistedStore/index';

export const makePersistedVar = <T>(value: T, key: StorageKey) => {
  const reactiveVar = makeVar<T>(value);

  const persistedVar = {
    getReactiveVar() {
      return reactiveVar;
    },

    setReactiveValue(newValue: T) {
      persistedStorageService.set<T>(newValue, key);
      reactiveVar(newValue);
    },

    getKey() {
      return key;
    },
  };

  return persistedVar;
};

export const tokenPersistedVar = makePersistedVar<string | null | undefined>(
  undefined,
  StorageKey.token,
);

export const persistedVars = [tokenPersistedVar];
