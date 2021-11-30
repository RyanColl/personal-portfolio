import './styles/App.css';
import './styles/NavBar.css';
import './styles/IndexPage.css'
import './styles/Footer.css';
import './styles/component.styles.css'
import './styles/ProjectsPage.css'
import Head from 'next/head';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import ScrollButton from '../components/Scroll/ScrollButton';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { changeThemeToDark, changeThemeToLight } from '../services/document.services';
import { getTheme, setTheme } from '../services/fetch.services';
import { motion } from 'framer-motion';

// keeps state in app
const CustomApp = ({ Component, pageProps }: AppProps) => {
 
  const [lightTheme, setLightTheme] = useState(false)
  const lightSwitch = () => {
    setTheme(!lightTheme) // server fetch
    setLightTheme(!lightTheme); // set state
    if(lightTheme) changeThemeToDark() // changes css variables to dark configuration
    if(!lightTheme) changeThemeToLight() // changes css variables to light configuration
  }
  useEffect(() => {
    document.body.style.margin = '0';
    getTheme()
      .then(lt => {
        if(lt) {
          setLightTheme(true)
          changeThemeToLight()
        }
      })
  }, [])
  return (
    <>
      <Head>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
      </Head>
      <motion.div className="App">
        <motion.header className="App-header">
          <NavBar
          lightTheme={lightTheme} 
          lightSwitch={lightSwitch} 
          /> 
        </motion.header>
        <Component lightTheme={lightTheme} {...pageProps} />
      </motion.div>
      <Footer lightTheme={lightTheme} />
      {(typeof window != "undefined" && window.innerWidth>700) && <ScrollButton lightTheme={lightTheme} />}
    </>
  );
};

export default CustomApp;