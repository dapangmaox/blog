import PostList from '../components/post-list';

const Post = async () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* @ts-expect-error async rsc support */}
      <PostList />
    </main>
  );
};

export default Post;
