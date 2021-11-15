import Head from 'next/head'
const IndexPage = ({ logo }) => {
  
  return(
    <>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css" />
    </Head>
    <div className="App">
    <header className="App-header">
      <img src={'./logo-p1.png'} className="App-logo" alt="logo" />
      <button onClick={() => console.log('pressed')}>Press ME</button>
    </header>
  </div>
  </>
)};



 export default IndexPage