import React from 'react';
import {View, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {
  const _showMoreApp = () => {
    navigation.navigate('Other');
  };

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Button title="Show me more of the app" onPress={_showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
      </View>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'Welcome to the app!',
});
export default HomeScreen;
