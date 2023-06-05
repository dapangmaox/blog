import PostListRSC from './components/post-list/rsc';

export default async function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <PostListRSC />
    </main>
  );
}
