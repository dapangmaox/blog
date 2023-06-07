import getPostList from '@/app/lib/get-posts';
import NextLink from 'next/link';

const PostList = async () => {
  const posts = await getPostList();
  return (
    <>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.slug}>
              <NextLink href={`post/${post.slug}`}>
                <span>{post.title}</span>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
