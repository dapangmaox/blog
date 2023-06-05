const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col ml-auto mr-auto prose max-w-3xl">
        {children}
      </main>
    </>
  );
};

export default PostLayout;
