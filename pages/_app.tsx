import './styles/App.css';
import './styles/NavBar.css';
import './styles/IndexPage.css'
import './styles/component.styles.css';
import './styles/ProjectsPage.css';
import './styles/About.css';
import './styles/Footer.css';
import './styles/BlogPage.css';
import './styles/Post.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import ScrollButton from '../components/Scroll/ScrollButton';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { changeThemeToDark, changeThemeToLight } from '../services/document.services';
// import { getTheme, setTheme } from '../services/fetch.services';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { getTheme, pingSystem, setTheme } from '../services/fetch.services';
// keeps state in app
const CustomApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [lightTheme, setLightTheme] = useState(false)
  const lightSwitch = () => {
    if(!lightTheme) changeThemeToLight() // changes css variables to light configuration
    if(lightTheme) changeThemeToDark() // changes css variables to dark configuration
    setTheme(!lightTheme) // server fetch
    setLightTheme(!lightTheme); // set state
  }
  useEffect(() => {
    document.body.style.margin = '0'; 
    getTheme().then(data => {
      // console.log('getting data: ', data)
      if(data.lightTheme) changeThemeToLight() // changes css variables to light configuration
      if(!data.lightTheme) changeThemeToDark() // changes css variables to dark configuration
      setLightTheme(data.lightTheme)
    })
    pingSystem()
    let pathname = window.location.pathname;
    let id = window.location.search.replace('?post=', '')
    // console.log('query: ', window.location.search.replace('?post=', ''))
    if(pathname === '/blog' || pathname === '/projects' || pathname === '/about') {
      router.push({ pathname })
    }
    if(pathname === '/post') router.push({pathname, query: {'post': `${id}`} })
  }, [])
  const [currentRoute, setCurrentRoute] = useState('')
  useEffect(() => {
    let route = router.route.replace('/', '')
    setCurrentRoute(route)
  }, [router.route])
  return (
    <>
      <Head>
        <title>RColl Dev Portfolio Site</title>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        <meta property="og:description" content="RColl Dev, an aspiring developer, shows off his work in this spectacular portfolio site." />
        <meta property="og:title" content="RColl Dev Portfolio Site" /> 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rcoll-dev.com/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/portfolio%2Fweb-design.png?alt=media&token=bf026db8-cb7f-4fbe-9578-42063d3cd7f9" />
        <meta property="og:image:width" content="457" />
        <meta property="og:image:height" content="540" />
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
      {currentRoute!=='about' && <Footer lightTheme={lightTheme} />}
      {(typeof window != "undefined" && window.innerWidth>700) && <ScrollButton lightTheme={lightTheme} />}
    </>
  );
};

export default CustomApp;