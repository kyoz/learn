import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PropTypesExample extends PureComponent {
  render() {
    return (
      <h4>Hello, this is {this.props.name}</h4>
    )
  }
}

PropTypesExample.propTypes = {
  name: PropTypes.string
};

PropTypesExample.defaultProps = {
  name: 'Kyoz'
  // name: 123 <- This will cause type errors
};

export default PropTypesExample;
