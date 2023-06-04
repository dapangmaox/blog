import PostListRSC from './components/post-list/rsc';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-expect-error Async Server Component */}
      <PostListRSC />
    </main>
  );
}
