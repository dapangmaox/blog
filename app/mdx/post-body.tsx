import { MDXRemote } from 'next-mdx-remote/rsc';
const PostBody = ({ source }: { source: string }) => {
  return (
    // @ts-expect-error RSC
    <MDXRemote source={source} />
  );
};

export default PostBody;
