import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { List, Searchbar } from 'react-native-paper';
import ItemDetails from './ItemDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SearchStack = createNativeStackNavigator();

const Search = ({navigation}:{navigation:any}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [viewItems, setViewItems] = React.useState([]);

  const searchItems=(e:any)=>{
    setSearchQuery(e.trim())
    if(searchQuery.length>0)
    {
      setViewItems(items.filter((item:any)=>item["title"].toLowerCase().includes(searchQuery.toLowerCase())))
    }else{
      setViewItems(items)
    }
    
  }

  const loadItems = async () => {
    fetch('https://dummyjson.com/products')
      .then(res  => res.json().then(data=>{
        console.log(data);
        setItems(data["products"]);
        setViewItems(data["products"])
      }

      ))
  }

  React.useEffect(() => {
    loadItems();
  }, []);

  return (
    <ScrollView>
      <Searchbar mode='view'
        placeholder="Search"
        onChangeText={searchItems}
        value={searchQuery} />
      <List.Section >
        {
          viewItems &&
          viewItems.map((item) => <List.Item key={item["id"]}
            title={item["title"]} onPress={(e) => { navigation.navigate("Details",{item:item}) }} />)
        }
      </List.Section>
    </ScrollView>

  );
};



export const ItemSearch = () => {
  return (
      <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={Search} options={{headerShown:false}} />     
        <SearchStack.Screen name="Details" component={ItemDetails} options={{headerShown:false}}/>        
      </SearchStack.Navigator>
  )
}


export default ItemSearch;
