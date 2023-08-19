import { ActivityIndicator, Text,View } from "react-native";

const SplashScreen=() =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Please Wait...</Text>
      </View>
    );
  }

export default SplashScreen;