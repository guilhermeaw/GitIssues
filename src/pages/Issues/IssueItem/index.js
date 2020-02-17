import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '~/styles';
import styles from './styles';

const IssueItem = ({issue}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{uri: issue.user.avatar_url}} style={styles.avatar} />
      </View>

      <View style={styles.titles}>
        <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
          {issue.title}
        </Text>
        <Text style={styles.name}>{issue.user.login}</Text>
      </View>

      <Icon name={'chevron-right'} size={20} color={colors.light} />
    </View>
  );
};

export default IssueItem;
