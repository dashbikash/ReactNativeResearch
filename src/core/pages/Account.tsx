import React from 'react'
import { View, } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

const Account = () => {
  const [user,setUser]=React.useState("Guest");
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={user} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
      <Text>Account</Text>
    </View>
  )
}

export default Account;