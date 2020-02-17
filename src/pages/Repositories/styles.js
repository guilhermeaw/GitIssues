import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lighter,
  },

  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    marginBottom: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: metrics.baseRadius * 2,
    marginRight: metrics.baseMargin / 2,
    paddingHorizontal: metrics.basePadding,
    borderColor: colors.light,
    borderWidth: 1,
  },

  button: {
    padding: metrics.basePadding / 2,
  },

  errorBox: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: metrics.baseMargin,
  },

  error: {
    color: colors.danger,
  },

  repoList: {
    marginBottom: metrics.baseMargin * 9,
  },
});

export default styles;
