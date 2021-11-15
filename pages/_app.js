import './styles/App.css';
// keeps state in app
const CustomApp = ({ Component, pageProps }) => {

  return (
    <Component {...pageProps} />
  );
};

export default CustomApp;