import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../../components/Icon/index.js';
import Styles from './style'

if (process.env.BROWSER) {
  require('./style.scss');
}


class <%= name %> extends Component {
  static navigationOptions = {
    tabBarLabel: 'Baus Boilerplate',
    tabBarIcon: (
      <Icon 
        styles={ Styles.icon }
        url={ require('../../assets/icons/baus.png') } />
    )
  };

  render() {
    return (
        <View style={ Styles.container }>
          <Text style={ Styles.heading }>Welcome</Text>
          <Text style={ Styles.desc }>This is a boilerplate for building iOS and Android apps with React Native</Text>
        </View>
    );
  }
}


<%= name %>.propTypes = {
  name: PropTypes.string
};

export default <%= name %>;