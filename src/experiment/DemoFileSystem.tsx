import { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';
import Toast from 'react-native-root-toast';

// ...



export function DemoFileSystem() {
    const [downloadsFolder, setDownloadsFolder] = useState('');
    const [documentsFolder, setDocumentsFolder] = useState('');
    const [externalDirectory, setExternalDirectory] = useState<string | undefined>('');



    useEffect(() => {
        setDownloadsFolder(RNFS.PicturesDirectoryPath)
        setExternalDirectory(RNFS.ExternalDirectoryPath);
        setDocumentsFolder(RNFS.DocumentDirectoryPath);

    }, []);
    return (
        <View>
            <Text>Downloads Folder: {downloadsFolder}</Text>
            <Text>Documents folder: {documentsFolder}</Text>
            <Text>External storage: {externalDirectory}</Text>
            <Button title="Create Dirs" onPress={(e) => {
                RNFS.exists(downloadsFolder + "/MyImages").then((result) => {
                    console.log(result)
                    if (!result) {
                        RNFS.mkdir(downloadsFolder + "/MyImages").catch((err)=>{
                            console.log(err)
                        })
                    }
                })
            }}/>
            <Button title="Get Dir Info" onPress={(e) => {
                RNFS.readDir(RNFS.DocumentDirectoryPath)
                .then((d:any)=>{
                    Toast.show(JSON.stringify(d), {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0
                      });
                }).catch((error:any)=>{
                    console.log(error)
                })
            }}/>

        </View>
    );
}

export default DemoFileSystem;