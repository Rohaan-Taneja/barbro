import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appname} from '.app.json'
import store from './src/redux/store';


const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appname, () => ReduxApp);