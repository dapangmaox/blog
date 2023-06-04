import { Post } from '@/app/lib/types';
import NextLink from 'next/link';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts: posts }: PostListProps) {
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
}
