import React, { Component } from 'react'
import { Button, ScrollView, StyleSheet, StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import Bright from './Bright'
import Dice from './Dice'

export default class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'MenuScreen',
        };
    }

    render() {
        switch(this.state.screen){
            case 'Bright':
                return <Bright changeScreen={this.changeScreen}/>
            case 'Dice':
                return <Dice changeScreen={this.changeScreen}/>
            default:
                return <MenuScreen changeScreen={this.changeScreen}/>
        }
    }


    changeScreen = (screen) => {
        return () => {
            this.setState({screen: screen})
        }
    }
}



function MenuScreen(props){
    const {changeScreen} = props;
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.item}>
                <Button color={'#A72300'} title={"Brilho"} onPress={changeScreen("Bright")} />
            </View>
            <View style={styles.item}>
                <Button color={'#A72300'} title={"Dado"} onPress={changeScreen("Dice")} />
            </View>
        </ScrollView>
    );
}



MenuScreen.propTypes = {
  changeScreen:  PropTypes.func.isRequired,
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
        //padding: 29,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
})

/*
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min +1)) + min

const templateLiteral = `${() => "return to a string"} and the string continue...`

const returnAnObjectWithANewKeyValuePair = (obj, key) => ({key, ...obj})


*/
