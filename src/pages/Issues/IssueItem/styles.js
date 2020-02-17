import {StyleSheet} from 'react-native';

import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius * 2,
  },

  image: {
    borderRadius: 50,
    overflow: 'hidden',
  },

  avatar: {
    width: 45,
    height: 45,
  },

  titles: {
    flexDirection: 'column',
    marginHorizontal: metrics.baseMargin,
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
  },

  name: {
    fontSize: 15,
    color: colors.regular,
  },
});

export default styles;
