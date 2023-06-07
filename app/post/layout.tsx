const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col ml-auto mr-auto max-w-3xl prose dark:prose-invert">
        {children}
      </main>
    </>
  );
};

export default PostLayout;
