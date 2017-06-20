import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style';

function <%= name %> (props) {
  return (
    <View style={ Styles.container }>
      <Text style={ Styles.heading }> new stateless <%= name %> component </Text>
    </View>
  );
}

<%= name %>.propTypes = {
  name: PropTypes.string
};

export default <%= name %>;
