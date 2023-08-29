import React, { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';
import Toast from 'react-native-root-toast';
import DeviceInfo from 'react-native-device-info';

// ...



export function DemoDeviceInfo() {
    
    const [uniqueid,setUniqueid]=React.useState('');

    useEffect(() => {
        DeviceInfo.getUniqueId().then((uniqueId) => {
            setUniqueid(uniqueId)
            });
    }, []);
    return (
        <View>
            <Text>DeviceID: {DeviceInfo.getDeviceId()}</Text>
            <Text>Device Type: {DeviceInfo.getDeviceType()}</Text>
            <Text>Unique ID: {uniqueid}</Text>
        </View>
    );
}

export default DemoDeviceInfo;