import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { H1, H2, H3 } from 'components/Heading';
import { A, P } from 'components/Text';
import Articles from 'articles';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
};

const Article: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const article = Articles.articles.find((article) => article.name === name);

  return (
    <div>
      <Head>
        <title>{article?.name}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nemu_sou" />
        <meta name="twitter:creator" content="@nemu_sou" />
        <meta
          property="og:url"
          content={`${process.env.BUILD_URL}/articles/${article?.name}`}
        />
        <meta property="og:title" content={article?.name} />
        {/* TODO <meta property="og:image" content="" /> */}
      </Head>

      <div className="px-16 py-8">
        <MDXProvider components={components}>{article && article.component({})}</MDXProvider>
      </div>
    </div>
  );
}

export default Article;
