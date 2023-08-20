import * as React from 'react';
import { createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import ItemSearch from './ItemSearch';
import Settings from './Settings';
import Account from './Account';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
 const theme=useTheme()
  return (
    <Tab.Navigator theme={theme}>
      <Tab.Screen name="Home" component={ItemSearch}  options={{tabBarIcon:"home", tabBarLabel:"Home" }}/>
      <Tab.Screen name="Account" component={Account}  options={{tabBarIcon:"account-circle",tabBarLabel:"Account"}}/>
      <Tab.Screen name="Settings" component={Settings}  options={{tabBarIcon:"cog",tabBarLabel:"Settings"}}/>
    </Tab.Navigator>
  );
}
export default HomeTabs;
