import getPosts, { getPost } from '@/app/lib/get-posts';
import { Post } from '@/app/lib/types';
import PostBody from '@/app/mdx/post-body';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    slug: post.slug;
  });
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { body } = (await getPost(params.slug)) as Post;

  return (
    <>
      {/* @ts-expect-error RSC */}
      <PostBody source={body} />
    </>
  );
};

export default PostPage;
