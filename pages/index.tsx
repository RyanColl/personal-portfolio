import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useEffect } from 'react';
const IndexPage = () => {
  useEffect(() => {
    document.body.style.margin = '0'
});
  return(
    
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  
)};



 export default IndexPage