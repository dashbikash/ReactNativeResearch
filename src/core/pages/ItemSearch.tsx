import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Appbar, Button, Divider, List, Menu, Searchbar } from 'react-native-paper';
import ItemDetails from './ItemDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListView, SplashScreen} from '../components/components';


const SearchStack = createNativeStackNavigator();

const Search = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [viewItems, setViewItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  const searchItems = (e: any) => {

    setSearchQuery(e)
    if (searchQuery.length > 0) {
      setViewItems(items.filter((item: any) => item["name"].toLowerCase().includes(searchQuery.trim().toLowerCase())))
    } else {
      setViewItems(items)
    }

  }

  const loadItems = async () => {
    fetch('https://64e3c91dbac46e480e793085.mockapi.io/customers')
      .then(res => res.json().then(data => {
        console.log(data);
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
    <View style={{ height: '100%' }}>
      <Searchbar mode='view'
          placeholder="Search"
          onChangeText={searchItems}
          onClearIconPress={()=>{setViewItems(items)}}
          value={searchQuery}
          style={{ display: 'flex', width: '100%' }}
        />

      {isLoading ? (
        <SplashScreen />

      ) : (
        <ScrollView>
          
          <List.Section >
            {
              viewItems &&
              viewItems.map((item,index) => <List.Item key={item["id"]}
                title={item["name"]+ "("+item["customerId"]+")"} 
                description={item["address"]}
                style={{backgroundColor:index%2!=0?"lightblue":"white"}}
                onPress={(e) => { navigation.navigate("Details", { item: item }) }} />)
            }
          </List.Section>
          
        </ScrollView>
      )}
    </View>

  );
};



export const ItemSearch = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} options={{ headerShown: false }} />

      <SearchStack.Screen name="Details" component={ItemDetails} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  )
}


export default ItemSearch;
