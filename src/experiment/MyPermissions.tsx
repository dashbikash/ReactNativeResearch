import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { checkMultiple, PERMISSIONS, RESULTS, request } from 'react-native-permissions'

const MyPermissions = () => {
    const onPressOut = (e: any) => {
        console.log(e)
        checkMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]).then((statuses) => {
            console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
            console.log('Read FS', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
            console.log('WriteFS', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
            if (statuses[PERMISSIONS.ANDROID.CAMERA] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.CAMERA).then((result: any) => {
                    console.log('Camera', result);
                });
            }
            if (statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result: any) => {
                    console.log('Read', result);
                });
            }
            if (statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] != RESULTS.GRANTED) {
                request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result: any) => {
                    console.log('Write', result);
                });
            }
        });
    }
    return (
        <View>
            <Button onPressOut={onPressOut}>Check Permissions</Button>
        </View>
    )
}

export default MyPermissions