import React from 'react'
import { View, } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

const Account = ({navigation}:{navigation: any}) => {
  const [user,setUser]=React.useState("Guest");
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={"Hey ! "+user} />
    </Appbar.Header>
      <Text>Account</Text>
    </View>
  )
}

export default Account;