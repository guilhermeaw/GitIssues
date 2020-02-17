import {StyleSheet} from 'react-native';

import {metrics, colors} from '~/styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
  },
});

export default styles;
