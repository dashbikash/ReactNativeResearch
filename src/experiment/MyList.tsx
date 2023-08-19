import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from 'react-native';


const MyList = () => {

  return (
    <View>
      <List.Section >
        <List.Item title="Item 1" />
        <List.Item title="Item 2" />
        <List.Item title="Item 3" />
        <List.Item title="Item 4" />
      </List.Section>
    </View>

  )
};

export default MyList;