import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {PageHeader} from '../../../5_widgets/PageHeader/PageHeader';
import {Post} from '../../../5_widgets/Post/Post';
import {usePaginationFavoritePosts} from './model';
import {PostModel} from '../../../7_shared/types/api-types';

export default function Favorites() {
  const styles = useTheme(getStyles);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {data, isLoading, getMorePosts, getPosts} =
    usePaginationFavoritePosts();
  const renderItem: ListRenderItem<PostModel> = post => {
    return (
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
        key={post.item.id}
      />
    );
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await getPosts();
    setIsRefreshing(false);
  };

  return (
    <View style={styles.Favorites}>
      <PageHeader PageName="Favorites" />
      <FlatList
        data={isLoading ? [] : (data?.favouritePosts.data as Array<PostModel>)}
        renderItem={renderItem}
        onEndReached={getMorePosts}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        keyExtractor={post => post.id}
      />
    </View>
  );
}
