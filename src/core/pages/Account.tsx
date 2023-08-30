import React from 'react'
import { View, } from 'react-native'
import { Appbar, Card, Text } from 'react-native-paper'
import AuthUser from '../models'

const Account = ({navigation}:{navigation: any}) => {
  const dummyUser:AuthUser={username:"guest",fullname:"Guest",role:"anonymous",otherdata:{"address":"Bhubaneswar"}}
  const [user,setUser]=React.useState(dummyUser);
  return (
    <View>
      <Card>
        <Card.Content>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{"Hey ! "+user.fullname}</Text>
        </Card.Content>
        <Card.Content>
          <Text style={{fontSize:16}}>{user.otherdata["address"]}</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

export default Account;