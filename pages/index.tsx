import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';
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
  }
  
  useEffect(() => {
    document.body.style.margin = '0';
    fetch('/getTheme').then(data => (data.json()))
      .then(data => {
        if(data.lightTheme) setLightTheme(true)
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