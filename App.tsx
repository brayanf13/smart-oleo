import React from 'react';
import { } from 'react-native';
import { StatusBar, StyleSheet } from 'react-native';
import Register from './src/pages/Register';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Register />
    </>
  );
}
