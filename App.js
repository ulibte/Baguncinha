//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import Dice from './screens/Dice';
import Bright from './screens/Bright';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/loginScreen'
import LoginScreen from './screens/loginScreen';
import { isLoggedIn } from './api'

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('black')

    const [isLogged, setIsLogged] = useState(false)
    isLoggedIn().then(res => setIsLogged(res))

    return (
        <View style={styles.container}>
            <AppMenuNavigator isLogged={isLogged}/>
        </View>
    );
}

const AppStack = createStackNavigator()

const AppMenuNavigator = props => (
    <NavigationContainer>
        {console.log(`prop logged = ${props.isLogged}`)}
        {props.isLogged ? (<AppStack.Navigator screenOptions={{headerShown: false,}}>
            <AppStack.Screen name="Menu" component={MenuScreen}/>
            <AppStack.Screen name="Bright" component={Bright}/>
            <AppStack.Screen name="Dice" component={Dice}/>
        </AppStack.Navigator>) : (
            <AppStack.Navigator screenOptions={{headerShown: false,}}>
            <AppStack.Screen name="Login" component={LoginScreen}/>
        </AppStack.Navigator>
        )}
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});
