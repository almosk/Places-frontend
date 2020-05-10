import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
// Continers and Components
import NewsNavigator from './NewsNavigator';
import ExploreScreen from '../containers/ExploreScreen';
import ProfileScreen from '../containers/ProfileScreen';
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Style
import { COLOR } from '../styles'
//Icons
import IconNews    from '../assets/icons/news.svg';
import IconExplore from '../assets/icons/explore.svg';
import IconProfile from '../assets/icons/profile.svg';

class MainBottomTabNavigator extends Component {
render() {
  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      backBehavior="none">
      <BottomTab.Screen
        name="News"
        options={{
          activeTintColor: COLOR.blue,
          tabBarLabel: ({focused}) => TabLabel('Новости', focused),
          tabBarIcon: (({focused}) => (<IconNews width={24} height={24} style={{ color: (focused ? COLOR.black50 : COLOR.black30) }}/>))}}
        component={NewsNavigator} />
      <BottomTab.Screen
        name="Explore"
        options={{
          tabBarLabel: ({focused}) => TabLabel('Обзор', focused),
          tabBarIcon: (({focused}) => (<IconExplore width={24} height={24} style={{ color: (focused ? COLOR.black50 : COLOR.black30) }}/>))}}
        component={ExploreScreen} />
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarLabel: ({focused}) => TabLabel('Профиль', focused),
          tabBarIcon: (({focused}) => (<IconProfile width={24} height={24} style={{ color: (focused ? COLOR.black50 : COLOR.black30) }}/>))}}
        component={ProfileScreen} />
    </BottomTab.Navigator>
    )
  }
}

const TabLabel = (text, focused) => {
  return (
    <Text style={{
        fontSize: 11,
        fontWeight: "bold",
        letterSpacing: 0.005,
        color: (focused ? COLOR.black50 : COLOR.black30)
      }}>
      { text }
    </Text>
  )
}

const BottomTab = createBottomTabNavigator();

export default MainBottomTabNavigator
