import React from 'react'
import { StyleSheet, View, } from 'react-native'
import { Appbar, Card, FAB, Text, useTheme } from 'react-native-paper'
import { keyToHeader } from '../utils/textutils';




const ItemDetails = ({ route, navigation }: { route: any, navigation: any }) => {
  const { item } = route.params;
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    card: {
      margin: 16,
      padding: 16,
    },
    textHeader: { color: colors.primary, fontWeight: "bold" },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });



  return (
    <View style={{ height: '100%' }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={item["name"]} />
      </Appbar.Header>
      <Card style={styles.card} mode='elevated'>
        {Object.keys(item).map(key => {
          return (
            <View>
              <Text style={styles.textHeader}>
                {keyToHeader(key) + " : "}
                <Text>
                  {item[key]}
                </Text>
              </Text>
            </View>
          )
        })}
      </Card>

      <FAB icon="check" style={styles.fab} label='Proceed' onPress={() => navigation.navigate("Reading")} />
    </View>
  )
}



export default ItemDetails;