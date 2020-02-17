import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lighter,
  },

  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding * 2,
    paddingVertical: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius * 2,
    backgroundColor: colors.light,
  },

  selected: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  filterButtonText: {
    color: colors.regular,
  },

  issueList: {
    marginBottom: metrics.baseMargin * 9,
  },
});

export default styles;
