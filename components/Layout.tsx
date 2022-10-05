import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='A searchable list of Star Wars characters'
      />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header></header>
    <div className='body'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
