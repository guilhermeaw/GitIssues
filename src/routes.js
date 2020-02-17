import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {colors} from '~/styles';
import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';
import Profile from '~/pages/Profile';

const Routes = () =>
  createAppContainer(
    createStackNavigator(
      {
        Repositories: {
          screen: Repositories,
          navigationOptions: {
            title: 'GitIssues',
          },
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            title: 'Profile',
          },
        },
        Issues: {
          screen: Issues,
          navigationOptions: {
            title: 'rocketnative',
          },
        },
      },
      {
        defaultNavigationOptions: {
          headerTintColor: colors.darker,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitleStyle: {
            color: colors.darker,
            fontWeight: 'bold',
          },
        },
      },
    ),
  );

export default Routes;
