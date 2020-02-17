import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

import {colors} from '~/styles';
import styles from './styles';

const Profile = props => {
  const {navigation} = props;
  const item = navigation.state.params.item;
  return (
    <>
      <StatusBar backgroundColor={colors.lighter} barStyle={'dark-content'} />
      <WebView style={styles.container} source={{uri: item.html_url}} />
    </>
  );
};

export default Profile;
