import React from 'react';
import {Button, StyleSheet, View, StatusBar} from 'react-native';

export default function BackButton(props){
    return (
        <View style={styles.bBack}>
            <Button title={'<-'} color={'#A72300'} onPress={props.changeScreen('')} />
        </View>
    )
}

const styles = StyleSheet.create({
    bBack: {
        justifyContent: 'flex-start',
        width: '20%',
        paddingTop: StatusBar.currentHeight,
        //alignItems: '',
    }
})

