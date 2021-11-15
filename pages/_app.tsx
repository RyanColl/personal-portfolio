import './styles/App.css';
import { AppProps } from 'next/app';
// keeps state in app
const CustomApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Component {...pageProps} />
  );
};

export default CustomApp;