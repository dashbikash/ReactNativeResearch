import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import RNFS from "react-native-fs";
import { v4 as uuidv4 } from 'uuid';

export function DemoCamera({navigation}:{navigation:any}) {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');
  async function getPermission() {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  }
  useEffect(() => {
    
    
    getPermission();
    setShowCamera(true);
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);      
      setShowCamera(false);
      console.log(photo.path);
    }
  };
  const btnOkOnPress=(e:any)=>{
    RNFS.exists(RNFS.PicturesDirectoryPath + "/MyImages").then((result) => {
      if (!result) {
          RNFS.mkdir(RNFS.PicturesDirectoryPath + "/MyImages").catch((err)=>{
              console.log(err)
          })
      }

      RNFS.copyFile(imageSource,RNFS.PicturesDirectoryPath + "/MyImages/BIK_"+uuidv4()+".jpg")
      .then(()=>{
        navigation.goBack()
      })
      .catch((err)=>{
        console.log(err)
      })
  })
  }

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
        
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
            enableHighQualityPhotos={false}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : null}

          <View style={styles.backButton}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
              }}
              onPress={() => navigation.goBack()}>
               <MaterialIcon style={{fontSize:50}} name='window-close' />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height:50,
                  width:50,
                  marginLeft:5
                }}
                onPress={() => setShowCamera(true)}>
                <MaterialIcon style={{fontSize:50}} name='camera-retake' />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height:50,
                  width:50,
                  marginRight:5
                }}
                onPress={btnOkOnPress}>
                <MaterialIcon style={{fontSize:50}} name='check' />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#ff0000',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});
