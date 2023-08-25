import { View, Text, Button } from 'react-native'
import React from 'react'
import { AesCBCPkcs7Decrypt, AesCBCPkcs7Encrypt } from "../core/utils/crypto";
import Geolocation from 'react-native-geolocation-service';

const DemoLocation = () => {

  const doPress = (e: any) => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );


  }
  return (
    <View>
      <Button onPress={doPress} title='Get Location' />
    </View>
  )
}

export default DemoLocation