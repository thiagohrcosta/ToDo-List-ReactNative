import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import React from 'react';
import { TaskContextProvider } from './src/contexts/TaskContext';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </>
  );
}
