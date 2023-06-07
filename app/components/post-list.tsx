import getPostList from '@/app/lib/get-posts';
import dayjs from 'dayjs';
import Link from 'next/link';

const PostList = async () => {
  const posts = await getPostList();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <Link href={post.slug}>
                <img
                  className="w-full rounded-xl"
                  src={`cover/${post.cover}.jpg`}
                  alt="cover"
                />
              </Link>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-100">
                  <Link href={post.slug}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-slate-400">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-x-4 text-xs mt-2">
                <time
                  dateTime={dayjs(post.createdDate).format('YYYY-MM-DD')}
                  className="text-gray-500"
                >
                  {dayjs(post.createdDate).format('YYYY-MM-DD')}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];
