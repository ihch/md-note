import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Header from '../components/Header';
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

export default function Home() {
  const articles = Articles.articles;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="ihch dev" />

      <div className="px-16 py-8">
        <MDXProvider components={components}>
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <a>
                {article.date} {article.name}
              </a>
            </Link>
          ))}
        </MDXProvider>
      </div>
    </div>
  );
}
