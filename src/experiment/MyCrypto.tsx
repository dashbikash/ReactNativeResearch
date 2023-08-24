import { View, Text, Button } from 'react-native'
import React from 'react'
import {  AesCBCPkcs7Decrypt,AesCBCPkcs7Encrypt } from "../core/utils/crypto";

const MyCrypto = () => {

  const doPress = (e: any) => {
    let enc=AesCBCPkcs7Encrypt("Hello World")
    let dec=AesCBCPkcs7Decrypt(enc)
    console.log(enc)
    console.log(dec)


  }
  return (
    <View>
      <Button onPress={doPress} title='Crypto Test' />
    </View>
  )
}

export default MyCrypto