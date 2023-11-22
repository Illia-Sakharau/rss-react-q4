import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
