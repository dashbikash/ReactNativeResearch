import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { PaperProvider, MD2LightTheme as DefaultTheme, MD2DarkTheme } from 'react-native-paper';

const themeLight = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#2196F3',
    }
};
const themeDark = {
    ...MD2DarkTheme,
    colors: {
        ...MD2DarkTheme.colors,
        primary: '#2196F3',

    }
};

export const main = () => {
    return (
        <PaperProvider theme={themeLight}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => main);
