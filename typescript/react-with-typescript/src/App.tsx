import React,{useState} from 'react';

import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List"

export interface Istate{
  person:{
  name:string
  url:string
  age:number
  note?:string
  }[]
}


function App() {

const [people,setpeople]=useState<Istate["person"]>([{
  name:"Hajime Isayama",
  url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9nLR2sdgfm0h7sD1oX20IAHaKW%26pid%3DApi%26h%3D160&f=1",
  age:35,
  note:"He is the greatest writer ever"
}])



  return (
    <div className="App">
     <h1>People invited to my party</h1>
     <List person={people}/>
     <AddToList people={people} setPeople={setpeople}/>
    </div>
  );
}

export default App;
