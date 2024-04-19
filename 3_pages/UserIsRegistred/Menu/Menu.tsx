import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {MediumUserIcon} from '../../../7_shared/UI/userIcons/mediumUserIcon';
import {Profile} from '../../../7_shared/UI/menuButtons/ProfileButton';
import {CloseAccount} from '../../../7_shared/UI/menuButtons/CloseAccount';
import {ThemeController} from '../../../7_shared/UI/menuButtons/ThemeController';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useGetUser} from '../../../__generated__/GetUserData';

interface MenuProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: FC<MenuProps> = ({setActive}) => {
  const {data} = useGetUser();
  const styles = useTheme(getStyles);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const closeModal = () => {
    setActive(false);
  };
  const openProfile = () => {
    closeModal();
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.menu}>
      <Pressable onPress={closeModal} style={styles.closeArea}></Pressable>
      <View style={styles.menuContent}>
        <View>
          <MediumUserIcon pathToIcon={data?.userMe.avatarUrl} />
          <Text style={styles.userName}>
            {data?.userMe.firstName} {data?.userMe.lastName}{' '}
            {data?.userMe.middleName}
          </Text>
          <View style={styles.menuButtons}>
            <Profile onPress={openProfile} />
            <CloseAccount onPress={closeModal} />
          </View>
        </View>
        <Pressable style={styles.themeController}>
          <ThemeController />
        </Pressable>
      </View>
    </View>
  );
};
