import PropTypes from 'prop-types';
import React from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

export default function MenuScreen({navigation}){
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.item}>
                <Button color={'#A72300'} title={"Brilho"} onPress={() => navigation.navigate('Bright')} />
            </View>
            <View style={styles.item}>
                <Button color={'#A72300'} title={"Dado"} onPress={() => navigation.navigate('Dice')} />
            </View>
        </ScrollView>
    );
}

MenuScreen.propTypes = {
    navigation: PropTypes.object
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

