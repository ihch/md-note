import React from 'react';
import { AppProps } from 'next/app';
import Header from 'components/Header';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Header title="ihch dev" />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
