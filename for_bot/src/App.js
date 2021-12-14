import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [Menu_title, Menu_title_change] = useState(['Home','인게임 정보','바텀 Trend 챔피언','Mate 챔피언 보기','AD Carry Youtube','board']);
  let [Contents, Contents_change] = useState('default');
  return (
    <div className="App">
      <div className ="black-nav">
        <div onClick={()=>{Contents_change(Menu_title[0])}}>{Menu_title[0]}</div>
        <div onClick={()=>{Contents_change(Menu_title[1])}}>{Menu_title[1]}</div>
        <div onClick={()=>{Contents_change(Menu_title[2])}}>{Menu_title[2]}</div>
        <div onClick={()=>{Contents_change(Menu_title[3])}}>{Menu_title[3]}</div>
        <div onClick={()=>{Contents_change(Menu_title[4])}}>{Menu_title[4]}</div>
        <div onClick={()=>{Contents_change(Menu_title[5])}}>{Menu_title[5]}</div>
      </div>
      
      <div>{Contents}</div>
      
    </div>
  );
}

function Home(){
  return (
   <div>Home</div>
  )
}

export default App;
