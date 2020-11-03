import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from './BackButton'

const MyScreen = props => {
    //console.log()
    return (
        <View style={styles.vScreen}>
            <BackButton changeScreen={props.changeScreen} />
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    vScreen: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
})

export default MyScreen