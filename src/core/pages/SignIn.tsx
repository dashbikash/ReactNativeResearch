import * as React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";


function SignIn({ navigation, route }:{navigation:any, route:any}) {
  const [username,setUsername]=React.useState("");
  const [password,setPassword]=React.useState("");
  const { setUserToken } = route.params;

  
  const signInOnPress=(e:any)=>{
    if(username==="guest" && password==="1234"){
      setUserToken(username);
    }
  }
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={signInOnPress} >Sign in</Button>
      </View>
    );
  }

export default SignIn;