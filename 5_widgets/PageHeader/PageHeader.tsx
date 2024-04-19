import {View, Text, Modal} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {SmallUserIcon} from '../../7_shared/UI/userIcons/smallUserIcon';
import {Menu} from '../../3_pages/UserIsRegistred/Menu/Menu';
type PageHeaderProps = {
  PageName: string;
};
export const PageHeader: FC<PageHeaderProps> = ({PageName}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = useTheme(getStyles);
  const handleModalVisible = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.header}>
      <View style={styles.sayHello}>
        <Text style={styles.greetings}>{PageName}</Text>
        <SmallUserIcon onPress={() => handleModalVisible()} />
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}>
        <Menu setActive={setModalVisible} />
      </Modal>
    </View>
  );
};
