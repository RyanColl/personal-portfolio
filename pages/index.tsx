import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useEffect } from 'react';
const IndexPage = () => {
  useEffect(() => {
    document.body.style.margin = '0'
});
  return(
    <>
    {/* its easy to add bulma to our project */}
    {/* <Head>
      <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css" />
    </Head> */}
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  </>
)};



 export default IndexPage