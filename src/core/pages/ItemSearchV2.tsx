import * as React from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Card, Searchbar, useTheme } from 'react-native-paper';
import { SplashScreen } from '../components/components';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome6';



const ItemSearchV2 = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [viewItems, setViewItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  const {colors}=useTheme();

  const searchItems = (e: any) => {
  
    setSearchQuery(e)
    if (searchQuery.length > 1) {
      setViewItems(items.filter((item: any) => item["name"].toLowerCase().includes(searchQuery.trim().toLowerCase())))
    } else {
      setViewItems(items)
    }

  }

  const loadItems = async () => {
    fetch('https://64e3c91dbac46e480e793085.mockapi.io/customers')
      .then(res => res.json().then(data => {
        setItems(data);
        setViewItems(data)
        setIsLoading(false)
      }

      ))
  }

  React.useEffect(() => {
    loadItems();
  }, []);

  return (
    <View style={{ height: '100%' ,display:'flex' }}>
      <Searchbar mode='view'
        placeholder="Search"
        onChangeText={searchItems}
        onClearIconPress={() => { setViewItems(items) }}
        value={searchQuery}
        style={{ margin:5}}
      />

      {isLoading ? (
        <SplashScreen />

      ) : (
          <SafeAreaView style={{marginBottom:64 }}>
            <FlatList
              data={viewItems}
              renderItem={({ item }) =>
                <Ripple style={{ margin:5  }} onPress={(e) => { navigation.navigate("Details", { item: item }) }} >
                  <Card mode='elevated'>
                    <Card.Content>
                      <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>{item["name"] + " "}{item["alive"] ? (<Icon color="green" name='circle-check'/>) : ('')}</Text>
                      <Text style={{ color: 'black',fontSize: 16 }}>{item["areaCode"]}</Text>
                      <Text style={{ color: 'gray' ,fontSize: 14}}>{item["address"]}</Text>
                      <Text style={{ color: 'gray' ,fontSize: 10}}>{new Date(item["updatedAt"]).toDateString()}</Text>
                    </Card.Content>
                  </Card>
                </Ripple>
              }
              keyExtractor={item => item['id']}
            />
          </SafeAreaView>

      )}
    </View>

  );
};





export default ItemSearchV2;
