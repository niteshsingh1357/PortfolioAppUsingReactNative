/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View, StatusBar} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';

let Tab = createBottomTabNavigator({
  First:{
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24} />
        )
    }
  },

  Second:{
    screen: AboutMe,
    navigationOptions: {
      tabBarLabel: "AboutMe",
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-person" color={tintColor} size={24} />
        )
    }
  },

  Third:{
    screen: Contact,
    navigationOptions: {
      tabBarLabel: "Contact",
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-call" color={tintColor} size={24} />
        )
    }
  }

},{
  tabBarOptions: {
    activeTintColor: "#283593",
    inactiveTintColor: "grey",
    labelStyle: {
      fontSize: 14,
    }
  }
})

export default class App extends Component {
  render() {
    return (
     
      <Tab/>

            
    );
  }
}



