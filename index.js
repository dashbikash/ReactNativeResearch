import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';


export const main = () => {


    return (
        <App />
    );
}

AppRegistry.registerComponent(appName, () => main);
