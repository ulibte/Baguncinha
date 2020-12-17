import React from 'react'
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen';
import Dice from '../screens/Dice';
import Bright from '../screens/Bright';
import RandomWord from '../screens/RandomWord'
import LoginScreen from '../screens/loginScreen';
import WordOptions from '../screens/WordOptions';
import store from '../redux/store'
import { userIsLogged } from "../redux/actions";
import { connect } from 'react-redux';


const AppStack = createStackNavigator()

const AppMenuNavigator = props => (
  <NavigationContainer>
    {
      props.isLogged ?
        (<AppStack.Navigator screenOptions={{ headerShown: false, }}>
          <AppStack.Screen name="Menu" component={MenuScreen} />
          <AppStack.Screen name="Bright" component={Bright} />
          <AppStack.Screen name="Dice" component={Dice} />
          <AppStack.Screen name="RWord" component={RandomWord} initialParams={{ max: 5, min: 2 }} />
          <AppStack.Screen name="RWordOp" component={WordOptions} />
        </AppStack.Navigator>)
        :
        (<AppStack.Navigator >
          <AppStack.Screen name="Login" component={LoginScreen} initialParams={{ setIsLogged: props.setIsLogged }} />
        </AppStack.Navigator>)
    }
  </NavigationContainer>
)

const mapStateToProps = (state) => ({
	logged: state.logged
})

const mapDispatchToProps = {
	userIsLogged,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuNavigator)
