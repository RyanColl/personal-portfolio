import './styles/App.css';
import './styles/NavBar.css';
import './styles/IndexPage.css'
import { AppProps } from 'next/app';
// keeps state in app
const CustomApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Component {...pageProps} />
  );
};

export default CustomApp;