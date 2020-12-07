//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import Dice from './screens/Dice';
import Bright from './screens/Bright';
import RandomWord from './screens/RandomWord'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import WordOptions from './screens/WordOptions';


export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('black')

    const [isLogged, setIsLogged] = useState(false)
    //isLoggedIn().then(res => setIsLogged(res))
    

    return (
        <View style={styles.container}>
            <AppMenuNavigator isLogged={isLogged} setIsLogged={setIsLogged}/>
        </View>
    );
}

const AppStack = createStackNavigator()

const AppMenuNavigator = props => (
    <NavigationContainer>
        {props.isLogged ? (<AppStack.Navigator screenOptions={{headerShown: false,}}>
            <AppStack.Screen name="Menu" component={MenuScreen}/>
            <AppStack.Screen name="Bright" component={Bright}/>
            <AppStack.Screen name="Dice" component={Dice}/>
            <AppStack.Screen name="RWord" component={RandomWord} initialParams={{max: 5, min: 2}}/>
            <AppStack.Screen name="RWordOp" component={WordOptions}/>
        </AppStack.Navigator>) : (
        <AppStack.Navigator >
            <AppStack.Screen name="Login" component={LoginScreen} initialParams={{setIsLogged: props.setIsLogged}}/>
        </AppStack.Navigator>
        )}
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});
