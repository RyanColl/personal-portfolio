import Head from 'next/head'
import NavBar from '../components/index/NavBar'
import { useEffect, useState } from 'react';
import { changeThemeToDark, changeThemeToLight } from '../services/document.services';
import IndexContent from '../components/index/Content';
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
    <div className="App">
      <header className="App-header">
        <NavBar 
        lightTheme={lightTheme} 
        lightSwitch={lightSwitch} 
        />
      </header>
      <IndexContent />
    </div>
  </>
)};

export default IndexPage;