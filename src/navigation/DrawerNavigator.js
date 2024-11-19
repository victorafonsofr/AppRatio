import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BotaoMat from './BotaoMat';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Font from 'expo-font';
import { Image, ActivityIndicator } from 'react-native';
import TabNavigator from './TabNavigator';
import ExerciciosScreen from '../screens/ExerciciosScreen';
import JogosScreen from '../screens/JogosScreen';
import VideoScreen from '../screens/VideoScreen';
import { useAuth } from '../api/AuthContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ChalkboardSE-Regular': require('../../assets/fonts/ChalkboardSE-Light.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerLeft: () => <BotaoMat onPress={() => props.navigation.openDrawer()} />,
        headerStyle: { backgroundColor: '#FD4A47' },
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            source={require('../../assets/logo.png')} 
            style={{
              width: 130,
              height: 60,
              resizeMode: 'contain',
            }}
          />
        ),
        headerRight: () => (
          <Image
            source={{ uri: user.data.user.photo }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
              borderWidth: 2,
              borderColor: '#fff',
            }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Jogos" component={JogosScreen} />
      <Drawer.Screen name="Video aulas" component={VideoScreen} />
    </Drawer.Navigator>
  );
}
