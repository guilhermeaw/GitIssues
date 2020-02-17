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

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titles: {
    marginLeft: metrics.baseMargin * 2,
    flex: 1,
  },

  organization: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
  },

  name: {
    fontSize: 15,
    color: colors.regular,
  },

  avatar: {
    height: 45,
    width: 45,
  },
});

export default styles;
