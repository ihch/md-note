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
              <Link href={`/articles/${article.name}`} key={article.id}>
                <a className="text-blue-600">
                  {article.date} {article.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="my-6">
          <H2>Tips</H2>
          <div className="ml-10">
            {tips.map((tips) => (
              <Link href={`/tips/${tips.name}`} key={tips.id}>
                <a className="text-blue-600">
                  {tips.date} {tips.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
