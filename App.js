/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My app!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/


//this is second example =========================================================
/*

import React, {Component} from 'react';
import {Image, ScrollView, Text, Button, TouchableHighlight} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      name:'Mehrab',
      color:'#841584',
      image_uri: {uri: 'https://photorator.com/photos/images/moraine-lake-banff-national-parkoutside-the-village-of-lake-louise-alberta-canada--31648.jpg'},
      toggle: false
    }
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }
  onPressLearnMore(){
    console.debug('button cicked');
    if(this.state.toggle){
      this.setState({
          name:'Mehrab',
          color:'#841584',
          image_uri: {uri: 'https://photorator.com/photos/images/moraine-lake-banff-national-parkoutside-the-village-of-lake-louise-alberta-canada--31648.jpg'},
          toggle: !this.state.toggle
      });
    }else {
      this.setState({
          name: 'Ferdous',
          color: '#000000',
          image_uri: {uri: 'https://scontent.fdac5-1.fna.fbcdn.net/v/t1.0-9/22406055_1257923461029573_8554039410724890765_n.jpg?oh=e6b78eba42638111ebbe5b64cc926a5d&oe=5A6E86FD'},
          toggle: !this.state.toggle});
    }
      // this.navigate.bind(this, "stats")
  }
  render(){
    return(
        <ScrollView>
          <Image
              source={this.state.image_uri}
              style={{width: 610, height:458}}
          />
          <Text>
            On iOS, a React Native ScrollView uses a native UIScrollView.
            On Android, it userrs a native ScrollView.

            On iOS, a React Native Image uses a native UIImageView.
            On Android, it uses a native ImageView.

            React Native wraps the fundamental native components, giving you
            the performance of a native app, plus the clean design of React.

          </Text>
          <Text>User is: {this.state.name}</Text>
          <Button
              onPress={this.onPressLearnMore}
              title="Learn More"
              color={this.state.color}
              accessibilityLabel="Learn more about this purple button"
          />
            <TouchableHighlight onPress={()=>{}} color="red">
                <Text>TO NEXT PAGE >></Text>
            </TouchableHighlight>
        </ScrollView>
    );
    }
}

*/

//second example end here ==============================================

import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

const App = props => {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native Navigation Sample!
            </Text>
            <Button
                onPress={() => navigate("SecondScreen")}
                title="Go to Second Screen"
            />
        </View>
    );
};

export default App;