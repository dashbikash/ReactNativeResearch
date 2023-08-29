import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import Toast from 'react-native-root-toast';
import SQLite from "react-native-sqlite-storage";

export const DemoSqlite = () => {
    const showToast = (message: string) => {
        Toast.show(message);
    }
    const onPressInit = (e: any) => {
        var appDB = SQLite.openDatabase({ name: 'app.db', location: 'default' },
            () => {
                const createQuery = `CREATE TABLE IF NOT EXISTS Customer(
                id text primary key,                
                name text,
                customerId text,
                areaCode text,
                catagory text ,             
                address text,
                alive boolean,
                income real,
                updatedAt integer,
                createdAt integer              
            );`;
                appDB.executeSql(createQuery, [], (result) => {
                    console.log("Table created");
                    showToast(JSON.stringify(result))
                }, (error) => {
                    console.log("Create table error", error)
                })


            },
            (error: any) => {
                console.log(error)
            });


    }
    const onPressInsert = (e: any) => {
        var appDB = SQLite.openDatabase({ name: 'app.db', location: 'default' },
            () => {
                const insertquery = `insert or ignore into Customer (id,name,customerId,areaCode,catagory,address,alive,income,updatedAt,createdAt)
                    values ('2','Bikash','121234','751002','A','My Address',true,22000,234322333,223323);`;

                appDB.executeSql(insertquery, [], (result) => {
                    console.log("Table created");
                    showToast(JSON.stringify(result))
                }, (error) => {
                    console.log("Create table error", error)
                })
            },
            (error: any) => {
                console.log(error)
            });


    }
    const onPressQuery = (e: any) => {
        var appDB = SQLite.openDatabase({ name: 'app.db', location: 'default' },
            () => {
                appDB.executeSql(`select * from Customer;`, [],
                    (results: any) => {
                        showToast(JSON.stringify(results))
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log(row);
                        }
                    }, (error) => {
                        console.log("Create table error", error)
                    })
            },
            (error: any) => {
                console.log(error)
            });


    }
    const onPressReset = (e: any) => {
        var appDB = SQLite.openDatabase({ name: 'app.db', location: 'default' },
            () => {
                const dropQuery = `DROP TABLE IF EXISTS Customer;`;
                const createQuery = ` CREATE TABLE IF NOT EXISTS Customer(
                    id text primary key,                
                    name text,
                    customerId text,
                    areaCode text,
                    catagory text ,             
                    address text,
                    alive boolean,
                    income real,
                    updatedAt integer,
                    createdAt integer              
                );`;
                appDB.executeSql(dropQuery, [], (result) => {
                    appDB.executeSql(createQuery, [], (result) => {
                        console.log("Table Reset");
                        showToast(JSON.stringify(result))
                    }, (error) => {
                        console.log("Create table error", error)
                    })
                }, (error) => {
                    console.log("Create table error", error)
                })
            },
            (error: any) => {
                console.log(error)
            });


    }
    return (
        <SafeAreaView >
            <Button title="Init & Create Table" onPress={onPressInit} />
            <Button title="Insert Data" onPress={onPressInsert} />
            <Button title="Query Data" onPress={onPressQuery} />
            <Button title="Reset Table" onPress={onPressReset} />
        </SafeAreaView>
    );
};


