const PostPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Post Page Layout</h1>
      <article>{children}</article>
    </>
  );
};

export default PostPageLayout;
