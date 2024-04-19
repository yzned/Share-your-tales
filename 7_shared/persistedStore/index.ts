import {MMKV} from 'react-native-mmkv';

const persistedStorage = new MMKV();

type PersistedObjectType<T> = {
  value: T;
};

export enum StorageKey {
  token = 'token',
}

export const persistedStorageService = {
  set<T>(newValue: T, key: StorageKey) {
    persistedStorage.set(key, JSON.stringify({value: newValue}));
  },

  get<T>(key: StorageKey) {
    const persistedString = persistedStorage.getString(key);

    if (persistedString) {
      return (JSON.parse(persistedString) as PersistedObjectType<T>).value;
    }

    return undefined;
  },
};
