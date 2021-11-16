import Head from 'next/head'
import NavBar from '../components/NavBar'
const IndexPage = () => {
  
  return(
    <>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css" />
    </Head>
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  </>
)};



 export default IndexPage