import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  
  const [count,setCount]=useState(0);
  
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className=''>
        <p>You have counted {count} times</p>
        <button className='p-4 bg-green-500 rounded-2xl' onClick={()=>{setCount(count+1)}}> 
          Count
        </button>
        <button className='p-4 mx-4 bg-red-500 rounded-2xl' onClick={()=>{setCount(0)}}>
          Clear          
        </button>
      </div>
      
    </div>
  );
}

export default App;
