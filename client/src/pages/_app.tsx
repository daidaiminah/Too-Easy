import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="relative">
        <Component {...pageProps} />
        <ScrollToTop />
      </div>
    </Provider>
  );
}
