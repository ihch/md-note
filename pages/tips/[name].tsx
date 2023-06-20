import React from 'react';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { H1, H2, H3 } from 'components/Heading';
import { A, P } from 'components/Text';
import Tips from 'tips';
import Head from 'next/head';

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
    const tip = Tips.tips.find((tip) => tip.name === name);

    return (
        <div>
            <Head>
                <title>{tip?.name}</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@nemu_sou" />
                <meta name="twitter:creator" content="@nemu_sou" />
                <meta property="og:url" content={`${process.env.BUILD_URL}/tips/${tip?.name}`} />
                <meta property="og:title" content={tip?.name} />
                {/* TODO <meta property="og:image" content="" /> */}
            </Head>

            <div className="px-16 py-8">
                <MDXProvider components={components}>{tip && tip.component({})}</MDXProvider>
            </div>
        </div>
    );
};

export default Tip;
