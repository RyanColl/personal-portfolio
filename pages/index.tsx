import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';
import { changeThemeToDark, changeThemeToLight } from '../services/document.services';
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
    <div className="App">
      <header className="App-header">
        <NavBar 
        lightTheme={lightTheme} 
        lightSwitch={lightSwitch} 
        />
      </header>
    </div>
)};

export default IndexPage;