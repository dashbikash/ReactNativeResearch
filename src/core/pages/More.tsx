import React from 'react'
import { View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import MyCrypto from '../../experiment/MyCrypto'
import { MyDocPicker } from '../../experiment/MyDocPicker'
import MyFileSystem from '../../experiment/MyFileSystem'
import MyPermissions from '../../experiment/MyPermissions'
import { MyMsgpackPicker } from '../../experiment/MyMsgpackPicker'

const More = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="More" />
      </Appbar.Header>
      <MyPermissions />
      <MyFileSystem />
      <MyDocPicker />
      <MyMsgpackPicker/>
      <MyCrypto />
    </View>
  )
}

export default More