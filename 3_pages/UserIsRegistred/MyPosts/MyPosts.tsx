import {View, FlatList, ListRenderItem} from 'react-native';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {PageHeader} from '../../../5_widgets/PageHeader/PageHeader';
import {PlusButton} from '../../../7_shared/UI/buttons/plusButton/Plus';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Post} from '../../../5_widgets/Post/Post';
import {DeleteButton} from '../../../7_shared/UI/buttons/deleteButton/DeleteButton';
import {SwipeRow} from 'react-native-swipe-list-view';
import {usePaginationMyPosts} from './model';
import {PostModel} from '../../../7_shared/types/api-types';
import {useState} from 'react';
export type MyPostsTypes = {
  afterCursor: string;
  limit: number;
};
export default function MyPosts() {
  const styles = useTheme(getStyles);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {data, isLoading, getMorePosts, getPosts} = usePaginationMyPosts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await getPosts();
    setIsRefreshing(false);
  };

  const renderItem: ListRenderItem<PostModel> = post => {
    return (
      <SwipeRow rightOpenValue={-73}>
        <View style={styles.deleteButton}>
          <DeleteButton id={post.item.id} />
        </View>
        <View style={styles.post}>
          <Post
            firstName={post.item.author.firstName}
            lastName={post.item.author.lastName}
            avatarUrl={post.item.author.avatarUrl}
            createdAt={post.item.createdAt}
            title={post.item.title}
            description={post.item.description}
            id={post.item.id}
            isLiked={post.item.isLiked}
            likesCount={post.item.likesCount}
            mediaUrl={post.item.mediaUrl}
          />
        </View>
      </SwipeRow>
    );
  };
  const openCreatePost = () => {
    navigation.navigate('CreatePost');
  };
  return (
    <View style={styles.myPosts}>
      <View style={styles.CreatePostButton}>
        <PlusButton onPress={openCreatePost} />
      </View>
      <PageHeader PageName="My posts" />
      <FlatList
        data={isLoading ? [] : (data?.myPosts.data as Array<PostModel>)}
        renderItem={renderItem}
        keyExtractor={post => post.id}
        onEndReached={getMorePosts}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
