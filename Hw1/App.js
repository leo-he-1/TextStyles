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
    <Text style={styles.text1}>This is text example </Text>
    <Text style={styles.text2}>This is text example </Text>
    <Text style={styles.text3}>This is text example </Text>
    <Text style={styles.text4}>This is text example </Text>
    <Text style={styles.text5}>This is text example </Text>
    <Text style={styles.text6}>This is text example </Text>
    <Text style={styles.text7}>This is text example </Text>
    <Text style={styles.text8}>This is text example </Text>
    <Text style={styles.text9}>This is text example </Text>
    <Text style={styles.text10}>This is text example </Text>
  </View>
);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
        },
        text1: {
            color: 'lime',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20
        },
        text2: {
            color: 'lime',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 30,
        },
        text3: {
            color: 'black',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            fontWeight: "bold"

        },
        text4: {
            color: 'black',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            fontStyle: 'italic'
        },
        text5: {
            color: 'black',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            textDecorationLine: "underline"
        },
        text6: {
            color: '#000',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
        },
        text7: {
            color: 'lime',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: 'italic'

        },
        text8: {
            color: '#000',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            marginLeft: 25
        },
        text9: {
            color: 'black',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            marginRight: 200,
            backgroundColor: "yellow"
        },
        text10: {
            color: 'lime',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20,
            marginRight: 200,
            backgroundColor: 'rgba(00, 255, 0, 0.2)'

        },
        text: {
            color: '#000',
            marginTop: 5,
            paddingVertical: 6,
            fontSize: 20
        },



});


export default App;
