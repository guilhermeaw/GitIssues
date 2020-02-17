import React, {Component} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

export default class Header extends Component {
  render() {
    const {title} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
