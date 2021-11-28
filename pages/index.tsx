import Head from 'next/head'
import NavBar from '../components/index/NavBar'
import { useEffect, useState } from 'react';
import { changeThemeToDark, changeThemeToLight } from '../services/document.services';
import IndexContent from '../components/index/Content';
import { motion } from 'framer-motion';
import Studying from '../components/index/Studying';
import Interests from '../components/index/Interests';
import Footer from '../components/Footer/Footer';
import ScrollButton from '../components/Scroll/ScrollButton';
const IndexPage = () => {
  const [lightTheme, setLightTheme] = useState(false)
  const lightSwitch = () => {
    fetch("/setTheme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lightTheme: !lightTheme }),
    });
    setLightTheme(!lightTheme);
    if(lightTheme) changeThemeToDark()
    if(!lightTheme) changeThemeToLight()
  }
  
  useEffect(() => {
    document.body.style.margin = '0';
    fetch('/getTheme').then(data => (data.json()))
      .then(data => {
        if(data.lightTheme) {
          setLightTheme(true)
          changeThemeToLight()
        }
      })
  }, []);
  return(
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
      <IndexContent />
      <Studying />
      <Interests />
      <Footer lightTheme={lightTheme} />
    </motion.div>
    {(typeof window != "undefined" && window.innerWidth>700) && <ScrollButton lightTheme={lightTheme} />}
  </>
)};

export default IndexPage;

const container = {
  hidden: { rotate: 0 },
  show: {
      rotate: 0,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 3,
      },
  },
}
const itemA = {
  hidden: { scale: 0, top: 100 },
  show: { scale: 1, top: 30 },
}

const itemB = {
  hidden: { scale: 0, top: 200 },
  show: { scale: 1, top: 80 },
}