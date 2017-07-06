import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

function <%= name %> () {
  return (
    <View style={ Styles.container }>
      <Text style={ Styles.heading }> new stateless <%= name %> component </Text>
    </View>
  );
}

export default <%= name %>;
