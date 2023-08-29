import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { Image, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';



export const ConfirmInput = ({ route, navigation }: { route: any, navigation: any }) => {
    const [photo, setPhoto] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [reading, setReading] = React.useState("");
    const [remark, setRemark] = React.useState("");
    return (
        <View style={{padding:5}}>
            <Card style={{marginTop:5}}>
                <Card.Title title="Capture" />
                <Card.Content>
                    <Image style={{width: 100,height:100,alignSelf:"center"}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
                </Card.Content>
            </Card>
            <Card style={{marginTop:5}}>
                <Card.Title title="Status" />
                <Text>{status}</Text>
            </Card>
            <Card style={{marginTop:5}}>
                <Card.Title title="Reading" />
                <Text>{reading}</Text>
            </Card>
            <Card style={{marginTop:5}}>
                <Card.Title title="Remark" />
                <Card.Content>
                    <Text>{remark}</Text>
                </Card.Content>
            </Card>
            <Button style={{marginTop:5}} mode='contained' onPressOut={(e)=>{navigation.navigate("Home")}}>Confirm and Save</Button>
        </View>
    )
}
