import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '~/styles';
import styles from './styles';

const RepositoryItem = ({repository}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: repository.avatar}} style={styles.avatar} />
        <View style={styles.titles}>
          <Text style={styles.organization}>{repository.organization}</Text>
          <Text numberOfLines={1} style={styles.name}>
            {repository.name}
          </Text>
        </View>
        <Icon name={'chevron-right'} size={20} color={colors.light} />
      </View>
    </View>
  );
};

export default RepositoryItem;
