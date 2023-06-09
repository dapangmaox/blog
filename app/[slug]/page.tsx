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
  const { body, cover, title } = (await getPost(params.slug)) as Post;

  return (
    <>
      <img
        className="w-full rounded-xl"
        src={`cover/${cover}.jpg`}
        alt="cover"
      />
      <h1 className="text-center">{title}</h1>
      {/* @ts-expect-error RSC */}
      <PostBody source={body} />
    </>
  );
};

export default PostPage;
