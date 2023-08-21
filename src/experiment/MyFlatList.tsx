import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';
import Ripple from "react-native-material-ripple";
import Icon from 'react-native-vector-icons/FontAwesome6';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: 'Third Item 1',
    category:"A",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: 'Third Item 2',
    category:"A",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description: 'Third Item 3',
    category:"B",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '4th Item',
    description: 'Third Item 4',
    category:"B",
  },
];

type ItemProps = {title: string};

// const Item = ({item}: any) => (
  
// );

const MyFlatList = () => {
  const {colors}=useTheme()
  return (
    <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={({item}) => 
            <Ripple style={{margin:5}}   onPress={(e:any)=>(console.log(item))} >
                <Card mode='outlined' style={{backgroundColor:'lightblue'}}>
                    <Card.Content>
                        <Text style={{color:colors.primary,fontSize:18,fontWeight:'bold'}}>{item["title"]+" "}{item["category"]=='B' ? (<Icon color="green" name='circle-check'/>):''}</Text>
                        <Text style={{color:"black"}}>{item["description"]}</Text>
                        <Text style={{color:"gray"}}>{item["category"]}</Text>
                    </Card.Content>                    
                </Card>                
            </Ripple>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MyFlatList;