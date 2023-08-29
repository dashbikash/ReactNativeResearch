import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Account from './Account';
import ItemSearchV2 from './ItemSearchV2';
import ExperimentsPage from '../../experiment/ExperimentsPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  const theme = useTheme()
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarItemStyle :{padding:5},tabBarStyle:{height:50,borderTopColor:'lightgray',borderTopWidth:0.75}}}>
      <Tab.Screen name="Home" component={ItemSearchV2} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="money-bill" color={color} size={size-5} />
        ), tabBarLabel: "Billing",
        headerShown:false
      }} />
      <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: ({ color, size }) => (
          <Icon name="user-circle" color={color} size={size-5} />
        ), tabBarLabel: "Account" }} />
      <Tab.Screen name="Settings" component={Account} options={{ tabBarIcon: ({ color, size }) => (
        <Icon name="gear" color={color} size={size-5} />
      ), tabBarLabel: "Settings" }} />
    </Tab.Navigator>
  );
}
export default HomeTabs;