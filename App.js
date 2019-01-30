import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import GoHome from './components/GoHome';

export default class App extends React.Component {
  getUserHomeHandler = () => {

  }
  render() {
    return (

      <View style={styles.container}>

      <Text style={styles.WelcomeStyle}>Welcome to glowMod! </Text>
        <GoHome onGetLocation = {this.getUserHomeHandler} />
      </View>

    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WelcomeStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
