import PostListRSC from '../components/post-list/rsc';

const Post = async ({ source }: { source: any }) => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* @ts-expect-error async rsc support */}
      <PostListRSC />
    </main>
  );
};

export default Post;
