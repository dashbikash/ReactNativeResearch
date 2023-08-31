import { View, } from 'react-native'
import React from 'react'
import { Appbar} from 'react-native-paper'



const Settings = ({ route, navigation }: { route: any, navigation: any }) => {
 
  return (
    <View style={{ height: '100%' }}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
        <Appbar.Action icon='react' onPressOut={(e:any)=>{navigation.navigate("Experiment")}}/>
      </Appbar.Header>
    </View>
  )
}

export default Settings;