import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Header from '../components/Header';
import Doc from '../components/Doc.mdx';
import { H1, H2, H3, IH1Props, IH2Props, IH3Props } from 'components/Heading';
import { A, IAProps, IPProps, P } from 'components/Text';

const components = {
  h1: (props: IH1Props) => <H1 {...props} />,
  h2: (props: IH2Props) => <H2 {...props} />,
  h3: (props: IH3Props) => <H3 {...props} />,
  p: (props: IPProps) => <P {...props} />,
  a: (props: IAProps) => <A {...props} />,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="ihch dev" />

      <div className="px-16 py-8">
        <MDXProvider components={components}>
          <Doc />
        </MDXProvider>
      </div>
    </div>
  );
}
