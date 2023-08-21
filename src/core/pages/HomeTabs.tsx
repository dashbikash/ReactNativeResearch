import * as React from 'react';
import { createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import ItemSearch from './ItemSearch';
import Settings from './Settings';
import Account from './Account';
import { useTheme } from 'react-native-paper';
import More from './More';
import MyFlatList from '../../experiment/MyFlatList';
import ItemSearchV2 from './ItemSearchV2';

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
 const theme=useTheme()
  return (
    <Tab.Navigator theme={theme}>
      <Tab.Screen name="Home" component={ItemSearchV2}  options={{tabBarIcon:"lightning-bolt", tabBarLabel:"Bill" }}/>
      <Tab.Screen name="Account" component={Account}  options={{tabBarIcon:"account-circle",tabBarLabel:"Account"}}/>
      <Tab.Screen name="Settings" component={Settings}  options={{tabBarIcon:"cog",tabBarLabel:"Settings"}}/>
      <Tab.Screen name="More" component={MyFlatList}  options={{tabBarIcon:"dots-horizontal-circle-outline",tabBarLabel:"More"}}/>
    </Tab.Navigator>
  );
}
export default HomeTabs;
