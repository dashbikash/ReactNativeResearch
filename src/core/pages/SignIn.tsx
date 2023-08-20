import * as React from "react";
import { Image, ToastAndroid, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";


function SignIn({ navigation, route }: { navigation: any, route: any }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUserToken } = route.params;


  const signInOnPress = (e: any) => {
    if (username.trim().toLocaleLowerCase() === "guest" && password === "1234") {
      setUserToken(username);
    }else{
      ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT);
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