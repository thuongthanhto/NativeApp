import React from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SignInScreen = ({navigation}) => {
  const _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');

    navigation.navigate('App');
  };

  return (
    <View>
      <Button title="Sign in!" onPress={_signInAsync} />
    </View>
  );
};

SignInScreen.navigationOptions = () => ({
  title: 'Please sign in',
});

export default SignInScreen;
