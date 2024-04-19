import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from '../../3_pages/UserIsRegistred/MainPage/MainPage';
import {Profile} from '../../3_pages/UserIsRegistred/Profile/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../../3_pages/UserIsRegistred/Favorites/Favorites';
import MyPosts from '../../3_pages/UserIsRegistred/MyPosts/MyPosts';
import {useTheme} from '../../7_shared/hooks/useTheme';
import {getStyles} from '../styles';
import {Text, View} from 'react-native';
import SvgHome from '../../../--no-index/home';
import SvgBookmark from '../../../--no-index/bookmark';
import SvgPhoto from '../../../--no-index/photo';
import CreatePost from '../../3_pages/UserIsRegistred/CreatePost/CreatePost';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainScreen = () => {
  const styles = useTheme(getStyles);
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
      }}>
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgHome
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.tapBarItemDefaultColor.color
                }
              />
              <Text
                style={
                  focused
                    ? styles.tapBarItemFocusedColor
                    : styles.tapBarItemDefaultColor
                }>
                Main
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgBookmark
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.tapBarItemDefaultColor.color
                }
              />
              <Text
                style={
                  focused
                    ? styles.tapBarItemFocusedColor
                    : styles.tapBarItemDefaultColor
                }>
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My posts"
        component={MyPosts}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgPhoto
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.tapBarItemDefaultColor.color
                }
              />
              <Text
                style={
                  focused
                    ? styles.tapBarItemFocusedColor
                    : styles.tapBarItemDefaultColor
                }>
                My posts
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export const UserIsRegistred = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
