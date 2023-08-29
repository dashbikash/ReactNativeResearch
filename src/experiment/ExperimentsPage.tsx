import React from 'react'
import { Button, ScrollView, View } from 'react-native'
import DemoCrypto from './DemoCrypto'
import { MyDocPicker } from './MyDocPicker'
import MyPermissions from './MyPermissions'
import { MyMsgpackPicker } from './MyMsgpackPicker'
import DemoLocation from './DemoLocation'
import { DemoSqlite } from './DemoSqlite'
import DemoPhotoControl from './DemoPhotoControl'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DemoCamera } from './DemoCamera'
import DemoFileSystem from './DemoFileSystem'
import DemoRealmDB from './DemoRealmDB'
import DemoKeyVal from './DemoKeyVal'
import DemoDeviceInfo from './DemoDeviceInfo'

const Stack=createNativeStackNavigator()



const ExperimentsPage = ({navigation}:{navigation: any}) => {
  return (

    <>
    
    <Stack.Navigator>
      <Stack.Screen name="Experiment" component={PageContents} options={{headerRight:()=>(<Button onPress={() => navigation.navigate("HomeTabs")} title="App" />)}} />
      <Stack.Screen name="Camera" component={DemoCamera} options={{headerShown:false}} />
      <Stack.Screen name="PhotoControl" component={DemoPhotoControl}  />
      <Stack.Screen name="FileSystem" component={DemoFileSystem}  />
      <Stack.Screen name="Crypto" component={DemoCrypto}  />
      <Stack.Screen name="RealmDB" component={DemoRealmDB}  />
      <Stack.Screen name="Sqlite" component={DemoSqlite}  />
      <Stack.Screen name="KVDB" component={DemoKeyVal}  />
      <Stack.Screen name="DeviceInfo" component={DemoDeviceInfo}  />
    </Stack.Navigator>
    </>

  )
}



function PageContents({navigation}:{navigation: any}) {
  return (
    <ScrollView>
      <MyPermissions />
      <Button title='File System' onPress={(e:any)=>{navigation.navigate('FileSystem')}} />
      <MyDocPicker />
      <MyMsgpackPicker/>
      <DemoLocation />
      <Button title='Crypto' onPress={(e:any)=>{navigation.navigate('Crypto')}} />
      <Button title='Camera' onPress={(e:any)=>{navigation.navigate('Camera')}} />
      <Button title='Photo Control' onPress={(e:any)=>{navigation.navigate('PhotoControl')}} />
      <Button title='Realm DB' onPress={(e:any)=>{navigation.navigate('RealmDB')}} />
      <Button title='Sqlite' onPress={(e:any)=>{navigation.navigate('Sqlite')}} />
      <Button title='Key-Val DB' onPress={(e:any)=>{navigation.navigate('KVDB')}} />
      <Button title='Device Info' onPress={(e:any)=>{navigation.navigate('DeviceInfo')}} />
      
    </ScrollView>
  )
}

export default ExperimentsPage