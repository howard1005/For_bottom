import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [a,b] = useState(['a','b','c']);
  let [cnt,setCnt] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkReact>asdasd</LinkReact>
      </header>
      <body className="App-header">
        <span onClick={()=>{setCnt(cnt+1)}}>👍</span> : {cnt}
      </body>
    </div>
  );
}

function LinkReact(s) {
  console.log(s)
  return (
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React1
  </a>
  )
}

export default App;
