import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import * as Msgpack from "@msgpack/msgpack";
import {Buffer} from "buffer";

export const MyMsgpackPicker = () => {
    const onPress = (e: any) => {
        DocumentPicker.pickSingle({
            presentationStyle: 'fullScreen',
            type: ["application/octate-stream"]
        }).then((r: DocumentPickerResponse) => {
            console.log(r)
            if(r.name?.endsWith(".dat")){
            RNFS.readFile(r.uri, 'base64').then((data: any) => {
                data=Buffer.from(data, 'base64')
                console.log(data)
                let d:any=  Msgpack.decode(data)
                console.log(d.length)
            })}else{
                console.log("Invalid File")
            }
        })
    }
    return (
        <SafeAreaView >
            <Button title="Select DAT File" onPress={onPress} />

        </SafeAreaView>
    );
};


