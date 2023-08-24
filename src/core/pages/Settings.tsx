import { View, } from 'react-native'
import React from 'react'
import { Appbar, Button, List, Text } from 'react-native-paper'



const Settings = ({ route, navigation }: { route: any, navigation: any }) => {
 
  return (
    <View style={{ height: '100%' }}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      
      
    </View>
  )
}

export default Settings;