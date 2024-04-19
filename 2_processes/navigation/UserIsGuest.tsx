import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../3_pages/UserIsGuest/Registration/Registration';
import Congrats from '../../3_pages/UserIsGuest/Congrats/Congrats';
import LogIn from '../../3_pages/UserIsGuest/LogIn/LogIn';
import GetStarted from '../../3_pages/UserIsGuest/GetStarted/GetStarted';
const Stack = createNativeStackNavigator();
export const UserIsGuest = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="congrats"
        component={Congrats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LogIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
