
import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";

export const SplashScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ActivityIndicator size="small" color="gray" />
    </View>
  );
}


export const ListView = (props: any) => {
const items=props["items"]
  const onItemPress = props["onItemPress"];
  return (
    <List.Section >
      {
        items &&
        items.map((item:any) => <List.Item key={item["id"]}
          title={item["title"]}
          description={item["description"]}
          onPress={(e:any)=>{onItemPress(e,item)}}
        />)
      }
    </List.Section>
  )
}
