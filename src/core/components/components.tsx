import { Text,View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const SplashScreen=() =>{
    return (
      <View style={{ backgroundColor:'white',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <ActivityIndicator size="small"  color="gray"/>
      </View>
    );
  }

export default SplashScreen;