import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { AesCBCPkcs7Decrypt, AesCBCPkcs7Encrypt } from "../core/utils/crypto";
const DemoCrypto = () => {
  const [input, setInput] = React.useState("");

  return (
    <View>
      <TextInput style={{color:'black'}} value={input} onChangeText={(val: any) => { setInput(val)}} />
      <Button onPress={(e: any) => { setInput(AesCBCPkcs7Encrypt(input)) }} title='Encrypt' />
      <Button onPress={(e: any) => { setInput(AesCBCPkcs7Decrypt(input)) }} title='Decrypt' />
    </View>
  )
}

export default DemoCrypto