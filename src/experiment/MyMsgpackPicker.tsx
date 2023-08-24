import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker';
import RNFS from 'react-native-fs';

export const MyMsgpackPicker = () => {
    const onPress = (e: any) => {
        DocumentPicker.pickSingle({
            presentationStyle: 'fullScreen',
            type: ["application/octate-stream"]
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
            <Button title="Select DAT File" onPress={onPress} />

        </SafeAreaView>
    );
};


