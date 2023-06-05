import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const PostBody = async ({ source }: { source: string }) => {
  return (
    <section className="pl-3 pr-3">
      {/* @ts-expect-error RSC */}
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor'],
                  },
                },
                { behaviour: 'wrap' },
              ],
              rehypeHighlight,
              rehypeCodeTitles,
            ],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </section>
  );
};

export default PostBody;
