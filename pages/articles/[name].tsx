import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Articles from 'articles';
import { marked, Renderer } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import fs from 'fs';
import { join } from 'path';

const Article = ({ name, md }: { name: string, md: string }) => {
    return (
        <div>
            <Head>
                <title>{name}</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@nemu_sou" />
                <meta name="twitter:creator" content="@nemu_sou" />
                <meta
                    property="og:url"
                    content={`${process.env.BUILD_URL}/articles/${name}`}
                />
                <meta property="og:title" content={name} />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"
                />
                {/* TODO <meta property="og:image" content="" /> */}
            </Head>

            <div className="px-16 py-8">
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: md,
                    }}
                />
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: Articles.articles.map((article) => `/articles/${article.name}`),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = (context) => {
    const name = context.params?.name || null;
    const article = Articles.articles.find((article) => article.name === name);
    const md = article?.articleName ? fs.readFileSync(join('articles', `${article.articleName}.mdx`), { encoding: 'utf8' }) : '';

    const renderer = new Renderer();
    renderer.code = (code, lang: string) => {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        // @ts-ignore
        const highlited = hljs.highlight(code, { language, theme: 'onedark' }).value;
        return `<pre><code class='hljs ${lang}'>${highlited}</code></pre>`;
    };

    return {
        props: {
            name,
            md: marked(md, {
                renderer,
                gfm: true,
                mangle: false,
                headerIds: false,
            }),
        },
    };
};

export default Article;
