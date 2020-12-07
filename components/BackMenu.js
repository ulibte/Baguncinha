import PropTypes from 'prop-types'
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import BackButton from './BackButton'

const BackMenu = props => {
    return (
        <View style={styles.vScreen}>
            <BackButton  pop={props.pop}/>
            {props.children}
        </View>
    )
}

BackMenu.propTypes = {
    pop: PropTypes.func
}

const styles = StyleSheet.create({
    vScreen: {
        flexGrow: 1,
        backgroundColor: 'black',
        paddingTop: StatusBar.currentHeight,
    },
})

export default BackMenu