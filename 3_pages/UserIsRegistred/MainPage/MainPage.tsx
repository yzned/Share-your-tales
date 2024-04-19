import {FlatList, ListRenderItem, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {PageHeader} from '../../../5_widgets/PageHeader/PageHeader';
import {Tabs} from '../../../7_shared/UI/dmTabs/Tabs';
import {Post} from '../../../5_widgets/Post/Post';
import {usePaginationPosts} from './model';
import {PostFilterType, PostModel} from '../../../7_shared/types/api-types';
import {useGetUser} from '../../../__generated__/GetUserData';

export default function MainPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const styles = useTheme(getStyles);
  const [postFilterType, setPostFilterType] = useState(PostFilterType.New);
  const {data, isLoading, getMorePosts, getPosts} = usePaginationPosts({
    postFilterType,
  });
  const {data: userData} = useGetUser();
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await getPosts();
    setIsRefreshing(false);
  };

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
  return (
    <View style={styles.mainPage}>
      <PageHeader
        PageName={`Hello ${
          userData?.userMe.firstName ? userData?.userMe.firstName : ' '
        }!`}
      />
      <View style={styles.tabs}>
        <Tabs setPostFilterType={setPostFilterType} />
      </View>
      <FlatList
        data={isLoading ? [] : (data?.posts.data as Array<PostModel>)}
        renderItem={renderItem}
        onEndReached={getMorePosts}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
