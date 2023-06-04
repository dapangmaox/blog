import getPostList from '@/app/lib/get-posts';
import PostList from '.';

export default async function PostListRSC() {
  const posts = await getPostList();

  return <PostList posts={posts} />;
}
