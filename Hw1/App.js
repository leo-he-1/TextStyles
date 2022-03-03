/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App = () => (
  <View style={styles.container}>
    <Text style={styles.text1}>This is a text example </Text>
    <Text style={styles.text2}>This is a text example </Text>
    <Text style={styles.text3}>This is a text example </Text>
    <Text style={styles.text4}>This is a text example </Text>
    <Text style={styles.text5}>This is a text example </Text>
    <Text style={styles.text6}>This is a text example </Text>
    <Text style={styles.text7}>This is a text example </Text>
    <Text style={styles.text8}>This is a text example </Text>
    <Text style={styles.text9}>This is a text example </Text>
    <Text style={styles.text10}>This is a text example </Text>
  </View>
);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
        },
        text1: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20
        },
        text2: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            fontWeight: "bold"
        },
        text3: {
            color: 'blue',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,

        },
        text4: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 30
        },
        text5: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            textAlign: "center"
        },
        text6: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            textDecorationLine: "underline"

        },
        text7: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            textDecorationLine: "line-through"
        },
        text8: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            textTransform: "uppercase"
        },
        text9: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            borderColor: "yellow",
            borderWidth: 4
        },
        text10: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20,
            backgroundColor: "green"
        },
        text: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20
        },



});


export default App;
