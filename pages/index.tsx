import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react';
import Doc from '../components/Doc.mdx';
import styles from '../styles/Home.module.css'

type IProps = {};

const components = {
  h1: (props: IProps) => <h1 style={{ color: 'teal', textAlign: 'left' }} {...props} />,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MDXProvider components={components}>
        <Doc />
      </MDXProvider>
    </div>
  )
}
