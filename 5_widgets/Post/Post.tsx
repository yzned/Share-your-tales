import {View, Text, Pressable, Modal, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import useDateFormatter from '../../7_shared/hooks/useDateFormate';
import {HeartButton} from '../../7_shared/UI/buttons/iconButtons/svgsButtons/heartButton/HeartButton';
import {ShareButton} from '../../7_shared/UI/buttons/iconButtons/svgsButtons/shareButton/ShareButton';
import {VerySmallUserIcon} from '../../7_shared/UI/userIcons/VerySmallUserIcon';
import {PostModal} from './PostModal/PostModal';

type PostProps = {
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  avatarUrl: string | undefined | null;
  createdAt: string;
  description: string;
  id: string;
  isLiked: boolean;
  likesCount: number;
  mediaUrl?: string;
  title: string;
};
export const Post: FC<PostProps> = ({
  avatarUrl,
  description,
  createdAt,
  firstName,
  id,
  isLiked,
  lastName,
  likesCount,
  mediaUrl,
  title,
}) => {
  const styles = useTheme(getStyles);
  const {formattedDate} = useDateFormatter({dateString: createdAt});
  const firstSymbol = lastName?.[0];
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => {
    setModalVisible(true);
  };
  return (
    <Pressable style={styles.post} onPress={() => handleModalVisible()}>
      <View style={styles.postData}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.createdAt}>{formattedDate}</Text>
      </View>
      <Image source={{uri: mediaUrl}} style={styles.imagePost} />
      <View style={styles.postData}>
        <View style={styles.userData}>
          <VerySmallUserIcon />
          <Text style={styles.userName}>
            {firstName} {firstSymbol !== undefined && firstSymbol + '.'}
          </Text>
        </View>
        <View style={styles.buttons}>
          <HeartButton id={id} isLiked={isLiked} likesCount={likesCount} />
          <ShareButton id={id} />
        </View>
        <Modal
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <PostModal
            setActive={setModalVisible}
            mediaUrl={mediaUrl}
            avatarUrl={avatarUrl}
            title={title}
            createdAt={createdAt}
            id={id}
            description={description}
            firstName={firstName}
            firstSymbol={firstSymbol}
            likesCount={likesCount}
            isLiked={isLiked}
          />
        </Modal>
      </View>
    </Pressable>
  );
};
