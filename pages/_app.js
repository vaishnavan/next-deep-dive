/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
