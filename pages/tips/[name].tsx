import React from 'react';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import Header from 'components/Header';
import { H1, H2, H3 } from 'components/Heading';
import { A, P } from 'components/Text';
import Tips from 'tips';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
};


const Tip: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const article = Tips.tips.find((tip) => tip.name === name);

  return (
    <div>
      {/* <Head></Head> */}

      <Header title="ihch dev" />

      <div className="px-16 py-8">
        <MDXProvider components={components}>{article && article.component({})}</MDXProvider>
      </div>
    </div>
  );
}

export default Tip;
