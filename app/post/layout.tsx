const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Post Layout</h1>
      <article>{children}</article>
    </>
  );
};

export default PostLayout;
