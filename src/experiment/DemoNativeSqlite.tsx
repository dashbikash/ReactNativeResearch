import React from 'react';
import { Button, SafeAreaView } from 'react-native';

export const DemoNativeSqlite = () => {
    const onPress = (e: any) => {
        
    }
    return (
        <SafeAreaView >
            <Button title="Import Data to DB" onPress={onPress} />
            <Button title="Query Data from DB" onPress={onPress} />
        </SafeAreaView>
    );
};


