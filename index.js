/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {ErrorContextProvider} from './src/hooks/errorHandlerContext';
import { AppLangContextProvider, AppThemeContextProvider } from './src/appcontext';

export function application() {
  console.log('store', store);
  console.log('persistor', persistor);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeContextProvider>
          <AppLangContextProvider>
            <ErrorContextProvider>
              <App />
            </ErrorContextProvider>
          </AppLangContextProvider>
        </AppThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => application);
