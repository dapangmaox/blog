import getPosts, { getPost } from '@/app/lib/get-posts';
import PostBody from '@/app/mdx/post-body';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    slug: post.slug;
  });
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return <PostBody source={post?.body || ''} />;
};

export default PostPage;
