import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
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

MyScreen.propTypes = {
    changeScreen: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    vScreen: {
        flexGrow: 1,
        backgroundColor: 'black',
        paddingTop: StatusBar.currentHeight,
    },
})

export default MyScreen