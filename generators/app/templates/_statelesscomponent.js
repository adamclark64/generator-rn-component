import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./style.scss');
}

function <%= name %> (props) {
  return (
    <h2>
      <%= name %> 
    </h2>
  );
}

<%= name %>.propTypes = {
  name: PropTypes.string
};

export default <%= name %>;
