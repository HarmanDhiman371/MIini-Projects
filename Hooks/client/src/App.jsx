import './App.css';
import { useState } from 'react';
function App() {
  const[ count , setcount]= useState(0);
  const[inputvalue, setInputvalue]=useState("");
  const addvalue = ()=>{
      setcount(count+1)
      if(count>=5){
        setcount(0);
      }
  }
  const  removevalue = ()=>{
      setcount(count-1)
      if(count<=0){
        setcount(0);
      }
  }
      


  
  return (
    <div className="App">
      <h1>harman</h1>
        <p> You clicked {count} times </p>
        <button onClick={()=>(setcount(count+1))}> increment</button>
        <button onClick={addvalue}>Add value</button>
        <button onClick={removevalue}>Remove value</button>
        <br />
        <input type="text" placeholder='kuj likho'
          value={inputvalue}
          onChange={(e)=>setInputvalue(e.target.value)}
         />
         <p>  You typed :<strong> {inputvalue}</strong></p>
    </div>
  );
}

export default App;
