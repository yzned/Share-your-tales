import React from 'react';
import {UserIsGuest} from './UserIsGuest';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../../7_shared/hooks/reduxHoooks';
import {UserIsRegistred} from './UserIsRegistred';
import {accountDataSelectors} from '../../1_app/redux/duck/acccountData/selectors';

export default function Navigation() {
  const checkIsLoginStatus = useAppSelector(state =>
    accountDataSelectors.getIsLoginStatus(state),
  );
  return (
    <NavigationContainer>
      {checkIsLoginStatus === false || checkIsLoginStatus === undefined ? (
        <UserIsGuest />
      ) : (
        <UserIsRegistred />
      )}
    </NavigationContainer>
  );
}
