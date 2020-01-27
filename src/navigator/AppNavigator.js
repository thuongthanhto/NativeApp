import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../views/Home';
import OtherScreen from '../views/Other';
import SignInScreen from '../views/SignIn';
import AuthLoadingScreen from '../views/AuthLoading';

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppContainer;
