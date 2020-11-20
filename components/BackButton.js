import React from 'react';
import PropTypes from 'prop-types'
import {Button, StyleSheet, View} from 'react-native';

export default function BackButton({navigate}){
    return (
        <View style={styles.bBack}>
            <Button title={'<-'} color={'#A72300'} onPress={() => navigate('Menu')} />
        </View>
    )
}

BackButton.propTypes = {
    navigate: PropTypes.func
}

const styles = StyleSheet.create({
    bBack: {
        justifyContent: 'flex-start',
        width: '20%',
        //alignItems: '',
    }
})

