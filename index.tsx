import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Application from './app/Application';

import {store} from './app/store';

const ReduxApp = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
