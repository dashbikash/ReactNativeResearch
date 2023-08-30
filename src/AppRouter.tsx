import * as React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {  adaptNavigationTheme, useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen} from './core/components/components';
import SignIn from './core/pages/SignIn';
import HomeTabs from './core/pages/HomeTabs';
import AuthUser from './core/models';
import {DemoCamera} from './experiment/DemoCamera';
import ItemDetails from './core/pages/ItemDetails';
import { BillInput } from './billing/pages/BillInput';
import ExperimentsPage from './experiment/ExperimentsPage';
import { ConfirmInput } from './billing/pages/ConfirmInput';
import HomeTabsV2 from './core/pages/HomeTabsV2';


const Stack = createNativeStackNavigator();

const AppRouter = () =>{
  const theme=useTheme()
  const NavTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary,
    },
  };

  
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<AuthUser|null>();
  
  const getAuthUser = async () => {
    const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(5);
      setUserToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getAuthUser();
  }, []);


  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
    <NavigationContainer theme={NavTheme}>
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} initialParams={{ setUserToken }} />
        
          ) : (
          // User is signed in
          <>
            <Stack.Screen name="Experiment" component={ExperimentsPage} options={{ headerShown: false }}/>          
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}} />
            <Stack.Screen name="Details" component={ItemDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Reading" component={BillInput} />
            <Stack.Screen name="Confirm" component={ConfirmInput} />
            
          </> 
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;