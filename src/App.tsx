import * as React from 'react';

import AppRouter from './AppRouter';

import { PaperProvider, MD2LightTheme as DefaultTheme, MD2DarkTheme } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';

const themeLight = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#D32F2F',
    }
};

const themeDark = {
    ...MD2DarkTheme,
    colors: {
        ...MD2DarkTheme.colors,
        primary: '#D32F2F88',
    }
};



const App = () =>{
  
  return (
    <PaperProvider theme={themeLight}>
      <RootSiblingParent>
        <AppRouter />
      </RootSiblingParent>
    </PaperProvider>
  );
}

export default App;