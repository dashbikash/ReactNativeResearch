import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker';
import RNFS from 'react-native-fs';

export const MyDocPicker = () => {
    const onPress = (e: any) => {
        DocumentPicker.pickSingle({
            presentationStyle: 'fullScreen',
            type: ["application/json"]
        }).then((r: DocumentPickerResponse) => {
            console.log(r)
            RNFS.readFile(r.uri, 'utf8').then((data: any) => {
                var d = JSON.parse(data)
                d.people.map((elm:any)=>{
                    console.log(elm)
                })
            })
        })
    }
    return (
        <SafeAreaView >
            <Button title="Select Json File" onPress={onPress} />

        </SafeAreaView>
    );
};


