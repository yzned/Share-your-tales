import {FieldPolicy} from '@apollo/client/cache/inmemory/policies';
import unionBy from 'lodash.unionby';
type KeyArgs = FieldPolicy<string>['keyArgs'];

export const cursorPagination = (
  keyArgs: KeyArgs = ['afterCursor'],
): FieldPolicy => ({
  keyArgs,
  merge(existing, incoming, {args}) {
    const incomingResult = incoming ? incoming.data : [];
    const existingResult = existing ? existing.data : [];
    const hasAfterCursor = Boolean(args?.input.afterCursor);
    if (hasAfterCursor) {
      const resultPagination = unionBy(existingResult, incomingResult, '__ref');
      return {
        ...incoming,
        data: resultPagination,
      };
    }
    return incoming;
  },
});
