import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Account from './Account';
import ItemSearchV2 from './ItemSearchV2';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

function HomeTabsV2() {
  const theme = useTheme()
  return (
    <Tab.Navigator  barStyle={{backgroundColor:theme.colors.primary}}>
      <Tab.Screen name="Home" component={ItemSearchV2} options={{ tabBarIcon:'cash-100', tabBarLabel: "Billing" }}  />
      <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: 'account-circle', tabBarLabel: "Account" }} />
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: 'cog', tabBarLabel: "Settings" }} />
    </Tab.Navigator>
  );
}
export default HomeTabsV2;