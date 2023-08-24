import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { Image, Linking, View } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';
import { Camera } from 'react-native-vision-camera';



export const BillInput = ({ route, navigation }: { route: any, navigation: any }) => {

    const [photo, setPhoto] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [reading, setReading] = React.useState("");
    const [remark, setRemark] = React.useState("");
    const{colors}=useTheme()
    const checkPermissions = async () =>  {
        const permission = await Camera.requestCameraPermission();
        console.log(`Camera permission status: ${permission}`);
        if (permission === 'denied') await Linking.openSettings();
    };
    
    React.useEffect(() => {
        checkPermissions()
      }, []);
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
                <Card.Content>
                    <Picker dropdownIconColor={colors.primary} style={{ color: colors.primary }}
                        selectedValue={status}
                        onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)

                        }>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </Card.Content>
            </Card>
            <Card style={{marginTop:5}}>
                <Card.Title title="Reading" />
                <Card.Content>
                    <TextInput mode='outlined' placeholder='Enter Reading' inputMode='numeric' value={reading} onChangeText={setReading} />
                </Card.Content>
            </Card>
            <Card style={{marginTop:5}}>
                <Card.Title title="Remark" />
                <Card.Content>
                    <Picker dropdownIconColor={colors.primary} style={{ color: colors.primary }}
                        selectedValue={remark}
                        onValueChange={(itemValue, itemIndex) =>
                            setRemark(itemValue)
                        }>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </Card.Content>
            </Card>
            <Button style={{marginTop:5}} mode='contained' onPressOut={(e)=>{checkPermissions}}>Submit</Button>
        </View>
    )
}
