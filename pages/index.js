
const IndexPage = ({ logo }) => {
  
  return(
    <div className="App">
    <header className="App-header">
      <img src={'./logo.svg'} className="App-logo" alt="logo" />
      <p>
        This app is completely set up with TailWind, Redux, Redis, Express and Nextjs.
      </p>
      <p>
        It is an all in one server and react rendering app for optimized seo alongside large app productions.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button onClick={() => console.log('pressed')}>Press ME</button>
    </header>
  </div>
)};



 export default IndexPage