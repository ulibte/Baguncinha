import React, { Component } from 'react'
import { Text, Button, ScrollView, StyleSheet, StatusBar, View } from 'react-native'
import Bright from './Bright'

export default class MainMenu extends Component {
    constructor(props){
        super(props)

        StatusBar.setBarStyle('light-content');
        
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} >
                <View style={styles.item}>
                    <Button color={'blue'} title={"Bright"} onPress={null} />
                </View>
            </ScrollView>
        )
    }

    enterBright = () => <Bright />
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingTop: StatusBar.currentHeight,
        flexDirection: "column",
        justifyContent: "flex-start",
        //alignItems: 'center',
        backgroundColor: 'black',
        flexGrow: 1,
    },
    item: {
        //flexGrow: 1,
        //flexShrink: 2,
        //padding: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
})

/*
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min +1)) + min

const templateLiteral = `${() => "return to a string"} and the string continue...`

const returnAnObjectWithANewKeyValuePair = (obj, key) => ({key, ...obj})


*/

