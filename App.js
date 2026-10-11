import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NotesScreen from './screens/NotesScreen';

/**
 * Activity 07: Save My Data
 * Learn AsyncStorage to persist data locally
 *
 * What's Pre-Built:
 * - ✅ App structure and navigation wrapper
 * - ✅ SafeAreaView for iOS notch handling
 * - ✅ StatusBar configuration
 *
 * What You'll Build:
 * - Complete TODO markers in screens/NotesScreen.js
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <NotesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
