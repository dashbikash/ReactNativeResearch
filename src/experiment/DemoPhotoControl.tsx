import { View,  Button, Image } from 'react-native'
import React from 'react'

const DemoPhotoControl = () => {

  const doPress = (e: any) => {


  }
  return (
    <View>
      <View style={{display:'flex'}}>

      <Button  onPress={doPress} title='Capture' />
      <Button onPress={doPress} title='Upload' />
      <Button onPress={doPress} title='Remove' />
      </View>
      <Image style={{height:200,width:200,alignSelf:'center'}} source={require('../assets/logo.png')}/>      
    </View>
  )
}

export default DemoPhotoControl;