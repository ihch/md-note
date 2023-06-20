import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Articles from 'articles';
import Tips from 'tips';
import { H2 } from 'components/Heading';

export default function Home() {
  const articles = Articles.articles;
  const tips = Tips.tips;

  return (
    <div>
      <Head>
        <title>ihch dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-16 py-8">
        <div>
          <H2>記事一覧</H2>
          <div className="ml-10 flex flex-col">
            {articles.map((article) => (
              <Link className="text-blue-600" href={`/articles/${article.name}`} key={article.id}>
                {article.date} {article.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-6">
          <H2>Tips</H2>
          <div className="ml-10">
            {tips.map((tips) => (
              <Link className="text-blue-600" href={`/tips/${tips.name}`} key={tips.id}>
                {tips.date} {tips.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
