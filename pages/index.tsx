import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Header from '../components/Header';
import Doc from '../components/Doc.mdx';
import { H1, H2, H3 } from 'components/Heading';
import { A, P } from 'components/Text';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* fouc対処 */}
      <script />

      <Header title="ihch dev" />

      <div className="px-16 py-8">
        <MDXProvider components={components}>
          <Doc />
        </MDXProvider>
      </div>
    </div>
  );
}
