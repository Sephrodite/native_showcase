import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/EventSchedule';
import Screen3 from './Screens/Screen3';
import ManageScreens from './Components/ManageScreens';
import Header from './Components/Header';
import Content from './Components/Content';
import { colours } from '../assets/colours';
import EventSchedule from './Screens/EventSchedule';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function NavBar() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colours.colors.first },
        headerTintColor: colours.colors.second,
        tabBarStyle: { backgroundColor: colours.colors.first },
        tabBarActiveTintColor: colours.colors.second,
      })}
    >
      <BottomTabs.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'Screen1',
          tabBarLabel: 'Screen1',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart-outline" size={29} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="Home"
        component={EventSchedule}
        options={{
          title: 'Schedule',
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={29} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="Screen3"
        component={Screen3}
        options={{
          title: 'Screen3',
          tabBarLabel: 'Screen3',
          tabBarIcon: ({ color }) => (
            <Ionicons name="flower-outline" size={29} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function Index() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="Navbar"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="leScreen"
          component={ManageScreens}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>

    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerContainer: {},
  headerText: {},
  contentContainer: {},
  todoItemContainer: {}
})
