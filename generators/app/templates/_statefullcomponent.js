import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';


class <%= name %> extends Component {
  render() {
    return (
        <View style={ Styles.container }>
          <Text style={ Styles.heading }> new statefull <%= name %> component </Text>
        </View>
    );
  }
}

export default <%= name %>;