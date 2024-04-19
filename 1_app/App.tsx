import React, {useEffect} from 'react';
import Navigation from '../2_processes/navigation/Navigation';

import {ThemeProvider} from './theme/ThemeProvider';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {client} from '../7_shared/api';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
