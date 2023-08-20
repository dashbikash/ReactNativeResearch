import { View, } from 'react-native'
import React from 'react'
import { ActivityIndicator, Appbar, List, Text } from 'react-native-paper'
import SplashScreen from '../components/components'

const Settings = () => {
  const listItemOnPressOut=(e:any)=>{
    console.log(e)
  }
  return (
    <View style={{height:'100%'}}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <List.Section >
        <List.Item title="Item 1" onPressOut={listItemOnPressOut} />
      </List.Section>
      <SplashScreen/>
    </View>
  )
}

export default Settings;