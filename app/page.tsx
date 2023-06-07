import PostList from './components/post-list';

export default async function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <PostList />
    </main>
  );
}
