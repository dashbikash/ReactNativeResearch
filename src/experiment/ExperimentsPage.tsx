import React from 'react'
import { Button, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import MyCrypto from './MyCrypto'
import { MyDocPicker } from './MyDocPicker'
import MyFileSystem from './MyFileSystem'
import MyPermissions from './MyPermissions'
import { MyMsgpackPicker } from './MyMsgpackPicker'
import DemoLocation from './DemoLocation'
import { DemoNativeSqlite } from './DemoNativeSqlite'

const ExperimentsPage = ({navigation}:{navigation: any}) => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Experiments" />
      </Appbar.Header>
      <MyPermissions />
      <MyFileSystem />
      <MyDocPicker />
      <MyMsgpackPicker/>
      <MyCrypto />
      <DemoLocation />
      <DemoNativeSqlite />
      <Button title='Camera' onPress={(e:any)=>{navigation.navigate('Camera')}} />
    </View>
  )
}

export default ExperimentsPage