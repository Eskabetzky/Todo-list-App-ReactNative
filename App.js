import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react'
import TodoScreen from './src/screen/TodoScreen';

export default function App () {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})