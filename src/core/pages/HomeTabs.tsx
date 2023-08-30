import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Account from './Account';
import ItemSearchV2 from './ItemSearchV2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFA from "react-native-vector-icons/FontAwesome6";
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarItemStyle :{padding:5},tabBarStyle:{height:50,borderTopColor:'lightgray',borderTopWidth:0.75}}}>
      <Tab.Screen name="Home" component={ItemSearchV2} options={{
        tabBarIcon: ({ color, size }) => (
          <IconFA name="money-bill-1" color={color} size={size-5} />
        ), tabBarLabel: "Billing",
        headerShown:false
      }} />
      <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: ({ color, size }) => (
          <IconFA name="user-circle" color={color} size={size-5} />
        ), tabBarLabel: "Account" }} />
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: ({ color, size }) => (
        <IconFA name="gear" color={color} size={size-5} />
      ), tabBarLabel: "Settings" }} />
    </Tab.Navigator>
  );
}
export default HomeTabs;