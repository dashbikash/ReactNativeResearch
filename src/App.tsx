import * as React from 'react';

import AppRouter from './AppRouter';

import { PaperProvider } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as Themes from "./AppThemes";



const App = () =>{
  
  return (
    <PaperProvider theme={Themes.defaultTheme}>
      <RootSiblingParent>
        <AppRouter />
      </RootSiblingParent>
    </PaperProvider>
  );
}

export default App;