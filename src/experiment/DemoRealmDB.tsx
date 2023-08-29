import { View, Text, Button } from 'react-native'
import React from 'react'
import Realm from "realm";
import { createRealmContext } from '@realm/react';

class Profile extends Realm.Object<Profile> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Profile],
};
// Create a realm context
const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);


const DemoRealmDB = () => {

  const btnOnPress = (e: any) => {
   


  }
  return (
    <RealmProvider>
      <>
        <Button title='Init DB' onPress={btnOnPress}/>
      </>
    </RealmProvider>
  )
}

export default DemoRealmDB;