import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import {StorageKey, persistedStorageService} from '../../persistedStore';
import {AppConfig} from './config';
import {cacheOption} from './cache-option';

const customFetch = async (uri: string, options?: any) => {
  const token = persistedStorageService.get<string>(StorageKey.token);
  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }
  const response = await fetch(uri, options);
  return response;
};
const httpLink = createHttpLink({
  uri: AppConfig.BASE_API_URL,
  fetch: customFetch,
});
export const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(cacheOption),
});
