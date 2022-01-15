import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen:{screen: HomeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);