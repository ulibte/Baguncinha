import React from 'react';
import PropTypes from 'prop-types'
import {Button, StyleSheet, View, StatusBar} from 'react-native';

export default function BackButton(props){
    return (
        <View style={styles.bBack}>
            <Button title={'<-'} color={'#A72300'} onPress={props.changeScreen('')} />
        </View>
    )
}

BackButton.propTypes = {
    changeScreen: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    bBack: {
        justifyContent: 'flex-start',
        width: '20%',
        //alignItems: '',
    }
})

