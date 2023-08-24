import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// ...



export function MyFileSystem() {
    const [downloadsFolder, setDownloadsFolder] = useState('');
    const [documentsFolder, setDocumentsFolder] = useState('');
    const [externalDirectory, setExternalDirectory] = useState<string | undefined>('');



    useEffect(() => {
        setDownloadsFolder(RNFS.PicturesDirectoryPath)
        setExternalDirectory(RNFS.ExternalDirectoryPath);
        setDocumentsFolder(RNFS.DocumentDirectoryPath);



    }, []);
    return (
        <SafeAreaView>
            <Text>Downloads Folder: {downloadsFolder}</Text>
            <Text>Documents folder: {documentsFolder}</Text>
            <Text>External storage: {externalDirectory}</Text>
            <Button onPressOut={(e) => {
                RNFS.exists(downloadsFolder + "/MyImages").then((result) => {
                    console.log(result)
                    if (!result) {
                        RNFS.mkdir(downloadsFolder + "/MyImages").catch((err)=>{
                            console.log(err)
                        })
                    }
                })
            }}>Create Dir </Button>
        </SafeAreaView>
    );
}

export default MyFileSystem;