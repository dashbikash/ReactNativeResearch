import { View, Text, Button } from 'react-native'
import React from 'react'
import { MMKV } from 'react-native-mmkv'
import Toast from 'react-native-root-toast'

export const storage = new MMKV()

const  DemoKeyVal= () => {

  const doPress = (e: any) => {
    storage.set("Name","Bikash")
    const val=storage.getString("Name")
   
    Toast.show( String(val))

  }
  return (
    <View>
      <Button onPress={doPress} title='Set n Get value of Key' />
    </View>
  )
}

export default DemoKeyVal