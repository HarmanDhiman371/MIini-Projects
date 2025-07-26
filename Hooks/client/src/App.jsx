// import { useState } from 'react';
// function App() {
//   const[count , setCount] = useState(0);
//    function add(){
//      setCount(count+1);
//    }
//    function remove(){
//     setCount(count-1);
//    }
//    function reset(){
//     setCount(0);
//    }
//   return (
//     <div className="App">
//      <h1>USESTATE</h1>
//        <p> Count : {count}</p>

//        <button onClick={add}> Increment</button>
//        <button onClick ={remove}> Decrement</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;
// // --------------------------------------------------------------------------------------------------
// import React from 'react'
// import {useState} from 'react'
// import './App.css';

// function App() {
//   const[inputtext , setText] = useState("");
//   function typer(e){
//     let input = e.target.value;
//     if(input.length>50) return ;

//      setText(input.toUpperCase())
//   }
//   return (
//     <div className="App">
//       <h2>Harman</h2>
//       <input type="text"
//          placeholder='type something'
//          value={inputtext}
//          onChange={typer} 
//       />
//       <p> You typing : {inputtext}</p>
//     </div>
//   )
// }

// export default App;
// --------------------------------------------------------------------------------------------------
// import {useState} from 'react'
// import './App.css';

// function App() {
//   const[password , setPassword] = useState('')
//   const[showpassword , setshowpassword] = useState(false);
//   function handleChange(e){
//     setPassword(e.target.value);
//   }
//   function toggle(){
//      setshowpassword(!showpassword)
//   }
//   return (
//     <div className="App">
//       <h2>Harman</h2>
//       <input type={showpassword ? 'text':'password'}
//         placeholder='Password'
//         value={password}
//         onChange={handleChange}
//       />
//       <button onClick={toggle}> {showpassword?'Hide':'Show'}</button>
      
//     </div>
//   )
// }

// export default App;
// ------------------------------------------------------------------------------------------------------
// import './App.css';
// import {useState} from 'react'
// function App(){
//   const[darkMode , setDarkmode] = useState(false);
//   function toggletheme(){
//      setDarkmode(!darkMode)
//   }
//   const themestyles={
//     backgroundColor: darkMode ?'#333':'#fff',
//     color:darkMode?'#fff':'#333',
//     padding:'50px',
//   };
//   return(
//     <div className='App' style={themestyles}>
//         <h1>{darkMode ?' DarkMODE ' : 'LIGHT MODE'}</h1>
//         <button onClick={toggletheme}> Switched to : {darkMode?'DarKmode':'LightmODE'} </button>
//     </div>
//   );
// }
// export default App;
import './App.css'
import {useState} from 'react'
function App(){
  const[count , setCount] = useState(0);
  const[inputvalue , setInputValue] = useState("");
  const[password , setPassword] = useState("");
  const[showpassword , setshowpassword] = useState(false);
  const[darkmode , setdarkmode] = useState(false);
  const themestyles = {
     backgroundColor:darkmode?'#333':'#fff',
     color:darkmode?'#fff':'#333'
  }
  function toggletheme(){
    setdarkmode(!darkmode)
  }
  function add(){
      setCount(count+1);
  }
  function display(e){
    setInputValue(e.target.value);
  }
  function remove(){
    if(count<=0){
      return;
    }
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  function handleChange(e){
      setPassword(e.target.value);
  }
  function toggle(){
     setshowpassword(!showpassword);
  }
    return(
      <div className='App' style={themestyles}>
           <h1> Harman Dhiman</h1>
           <h2> Counter : {count}</h2>
           <button  onClick={add} > Increment</button>
           <button onClick={remove}>Decrement</button>
           <button onClick={reset}>Reset</button>
           <br />
           <h2 > Typing perviewer </h2>
           <input type="text"
               placeholder='type something'
               value={inputvalue}
               onChange={display}
            />
            <p> you typing : {inputvalue}</p>

            <h2> Password</h2>
            <input type={showpassword?'text':'password'}
                 placeholder='Enter password'
                 value={password}
                 onChange={handleChange}
            />
           
            <button onClick={toggle}>{ showpassword ?'Hide':'show'}</button>
             <br />
            <button onClick={toggletheme}> Enable {darkmode?'LightMode':'DarkMode'}</button>
      </div>
    )

}
export default App;