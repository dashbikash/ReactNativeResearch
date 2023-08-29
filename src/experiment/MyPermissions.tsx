import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { checkMultiple, PERMISSIONS, RESULTS, request } from 'react-native-permissions'

const MyPermissions = () => {
    const onPress = (e: any) => {
        console.log(e)
        checkMultiple([PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
            console.log('CAMERA', statuses[PERMISSIONS.ANDROID.CAMERA]);
            console.log('ACCESS_FINE_LOCATION:', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
            console.log('ACCESS_COARSE_LOCATION', statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);
            if (statuses[PERMISSIONS.ANDROID.CAMERA] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.CAMERA).then((result: any) => {
                    console.log('Camera', result);
                });
            }
            if (statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result: any) => {
                    console.log('Fine Location', result);
                });
            }
            if (statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then((result: any) => {
                    console.log('Course Location', result);
                });
            }         
        });
    }
    return (
        <View>
            <Button title='Request Permissions' onPress={onPress} />
        </View>
    )
}

export default MyPermissions