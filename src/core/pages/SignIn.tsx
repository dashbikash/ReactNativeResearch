import * as React from "react";
import { Image, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import AuthUser from "../models";
import Toast from "react-native-root-toast";


function SignIn({ navigation, route }: { navigation: any, route: any }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUserToken } = route.params;
  const dummyUser:AuthUser={username:"guest",fullname:"guest",role:"guest",otherdata:{}}
  
  setUserToken(dummyUser)
  
  const signInOnPress = (e: any) => {
    if (username.trim().toLocaleLowerCase() === "guest" && password === "1234") {
      setUserToken(username);
    }else{
      Toast.show("Invalid Credentials", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
      });
    }

  }

  return (
    <View style={{alignContent:"center"}}>

      <Image style={{width: 70,height:70,marginTop:100,alignSelf:"center"}} source={require('../../assets/logo.png')}  />
      <Card mode="elevated" style={{margin:20,padding:10}}>
        <TextInput
          mode="outlined"
          placeholder="Username"
          style={{marginTop:5}} 
          value={username}
          onChangeText={setUsername}

        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          style={{marginTop:5}} 
          value={password}
          onChangeText={setPassword}
          inputMode="numeric"
          secureTextEntry          
        />
         <Button mode="contained" style={{marginTop:5}} onPress={signInOnPress} >Sign in</Button>
      </Card>

     
    </View>
  );
}

export default SignIn;