//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import Dice from './screens/Dice';
import Bright from './screens/Bright';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('black')
    return (
        <View style={styles.container}>
            <AppMenuNavigator />
        </View>
    );
}

const AppStack = createStackNavigator()
/* const BrightStack = createStackNavigator()
const DiceStack = createStackNavigator()
<BrightStack.Navigator>
<BrightStack.Screen name="Bright" component={Bright}/>
</BrightStack.Navigator>
<DiceStack.Navigator>
<DiceStack.Screen name="Dice" component={Dice}/>
</DiceStack.Navigator> */

const AppMenuNavigator = () => (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false,}}>
            <AppStack.Screen name="Menu" component={MenuScreen}/>
            <AppStack.Screen name="Bright" component={Bright}/>
            <AppStack.Screen name="Dice" component={Dice}/>
        </AppStack.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});
