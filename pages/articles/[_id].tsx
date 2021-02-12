import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import Header from 'components/Header';
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
  const { _id } = router.query;
  const article = Articles.articles.find((article) => article.id === _id);

  return (
    <div>
      <Head>
        <title>{article?.name}</title>
      </Head>

      <Header title="ihch dev" />

      <div className="px-16 py-8">
        <MDXProvider components={components} >
          {article && article.component({})}
        </MDXProvider>
      </div>
    </div>
  );
}

export default Article;
