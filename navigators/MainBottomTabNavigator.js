import React, { Component } from 'react';
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
          title: 'Новости',
          activeTintColor: COLOR.blue,
          tabBarIcon: (() => (<IconNews width={24} height={24}/>))}}
        component={NewsNavigator} />
      <BottomTab.Screen
        name="Explore"
        options={{
          title: 'Обзор',
          tabBarIcon: (() => (<IconExplore width={24} height={24}/>))}}
        component={ExploreScreen} />
      <BottomTab.Screen
        name="Profile"
        options={{
          title: 'Профиль',
          tabBarIcon: (() => (<IconProfile width={24} height={24}/>))}}
        component={ProfileScreen} />
    </BottomTab.Navigator>
    )
  }
}

const BottomTab = createBottomTabNavigator();

export default MainBottomTabNavigator
