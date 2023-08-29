import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Card, Searchbar, TouchableRipple, useTheme } from 'react-native-paper';
import { SplashScreen } from '../components/components';
import Icon from 'react-native-vector-icons/FontAwesome6';



const ItemSearchV2 = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [viewItems, setViewItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  const { colors } = useTheme();

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
    <View style={{ height: '100%', display: 'flex' }}>
        <Searchbar
          mode='bar'
          placeholder="Enter to Search"
          onChangeText={searchItems}
          onClearIconPress={() => { setViewItems(items) }}
          value={searchQuery}
          style={{ margin: 5, borderColor: "silver",borderWidth:1,elevation:5 }}
        />


      {isLoading ? (
        <SplashScreen />

      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={viewItems}
            renderItem={({ item }) =>

              <TouchableRipple borderless style={{ margin: 5, borderRadius: 5, elevation: 2 }} onPress={(e) => { navigation.navigate("Details", { item: item }) }} rippleColor="rgba(0, 0, 0, .25)">
                <Card >
                  <Card.Content >
                    <>
                      <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>{item["name"] + " "}{item["alive"] ? (<Icon color="green" name='circle-check' />) : ('')}</Text>
                      <Text style={{ color: 'black', fontSize: 16 }}>{item["areaCode"]}</Text>
                      <Text style={{ color: 'gray', fontSize: 14 }}>{item["address"]}</Text>
                      <Text style={{ color: 'magenta', fontSize: 10 }}>{new Date(item["updatedAt"]).toDateString()}</Text>
                    </>
                  </Card.Content>
                </Card>
              </TouchableRipple>
            }
            keyExtractor={item => item['id']}
          />
        </SafeAreaView>

      )}
    </View>

  );
};





export default ItemSearchV2;
