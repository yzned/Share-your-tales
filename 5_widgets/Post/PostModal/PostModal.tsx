import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {LeftArrowButton} from '../../../7_shared/UI/buttons/iconButtons/svgsButtons/leftArrowButton/LeftArrowButton';
import {VerySmallUserIcon} from '../../../7_shared/UI/userIcons/VerySmallUserIcon';
import {ShareButton} from '../../../7_shared/UI/buttons/iconButtons/svgsButtons/shareButton/ShareButton';
import {HeartButton} from '../../../7_shared/UI/buttons/iconButtons/svgsButtons/heartButton/HeartButton';
import useDateFormatter from '../../../7_shared/hooks/useDateFormate';
interface PostModalProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  createdAt: string;
  description: string;
  firstName: string | undefined | null;
  firstSymbol: string | undefined;
  likesCount: number;
  id: string;
  isLiked: boolean;
  mediaUrl?: string;
  avatarUrl: string | undefined | null;
}
export const PostModal: FC<PostModalProps> = ({
  setActive,
  title,
  createdAt,
  id,
  isLiked,
  description,
  firstName,
  firstSymbol,
  mediaUrl,
  likesCount,
}) => {
  const styles = useTheme(getStyles);
  const closeModal = () => {
    setActive(false);
  };
  const openProfile = () => {
    closeModal();
  };
  const {formattedDate} = useDateFormatter({dateString: createdAt});
  return (
    <View style={styles.postModal}>
      <View style={styles.topMenu}>
        <View style={styles.backButton}>
          <LeftArrowButton onPress={closeModal} />
        </View>
        <Text style={styles.pageName}>{title}</Text>
      </View>

      <Text style={styles.createdAt}>{formattedDate}</Text>
      <Image source={{uri: mediaUrl}} style={styles.imagePost} />
      <Text style={styles.description}>{description}</Text>

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
      </View>
    </View>
  );
};
