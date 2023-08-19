import React from 'react'
import { View, } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

const ItemDetails = ({ route, navigation }:{ route:any, navigation:any }) => {
  const { item } = route.params;
  const capitalize=(str: string): string=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View>
       <Appbar.Header>
       <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.title} />
    </Appbar.Header>
      {Object.keys(item).map(key => {
        return (
          <View>
            <Text style={{color: 'red'}}>
                {capitalize(key) +" : "}
                <Text>
                    {item[key]}
                </Text>
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default ItemDetails;