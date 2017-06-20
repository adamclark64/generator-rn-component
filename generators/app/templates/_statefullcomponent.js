import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './style'


class <%= name %> extends Component {
  render() {
    return (
        <View style={ Styles.container }>
          <Text style={ Styles.heading }> new statefull <%= name %> component </Text>
        </View>
    );
  }
}


<%= name %>.propTypes = {
  name: PropTypes.string
};

export default <%= name %>;