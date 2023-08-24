import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from "react-native-vector-icons/FontAwesome6";
import Account from './Account';
import ItemSearchV2 from './ItemSearchV2';
import Settings from './Settings';
import More from './More';

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
 const theme=useTheme()
  return (
    <Tab.Navigator theme={theme}>
      <Tab.Screen name="Home" component={ItemSearchV2}  options={{ tabBarIcon:()=> (<Icon  name='money-bills' size={20} />), tabBarLabel:"Billing" }}/>
      <Tab.Screen name="Account" component={Account}  options={{tabBarIcon:"account-circle",tabBarLabel:"Account"}}/>
      <Tab.Screen name="More" component={More}  options={{tabBarIcon:"dots-horizontal-circle",tabBarLabel:"More"}}/>
    </Tab.Navigator>
  );
}
export default HomeTabs;