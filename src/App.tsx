import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {  adaptNavigationTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen} from './core/components/components';
import SignIn from './core/pages/SignIn';
import HomeTabs from './core/pages/HomeTabs';
import AuthUser from './core/models';
import MyCamera from './experiment/MyCamera';
import ItemDetails from './core/pages/ItemDetails';
import { BillInput } from './billing/pages/BillInput';


const Stack = createNativeStackNavigator();

const { LightTheme } = adaptNavigationTheme({reactNavigationLight :DefaultTheme} );


const App = () =>{
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<AuthUser|null>();
  
  const getAuthUser = async () => {
    const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(500);
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
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} initialParams={{ setUserToken }} />
        ) : (
          // User is signed in
          <>          
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}} />
            <Stack.Screen name="Details" component={ItemDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Camera" component={MyCamera} options={{headerShown:false}} />
            <Stack.Screen name="Reading" component={BillInput} />
          </> 
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;