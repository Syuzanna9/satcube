import React, { useEffect } from 'react';
import './App.css';
import SignIn from './Components/SignIn';
// import ShowScreen from './Screens/ShowScreen';

function App() {

  
  useEffect( ()=>{

    async function getData(){
      let response = await fetch('api/hello');

      let text = await response.json(); // read response body as text
      console.log(text)

      
    }

   
    getData();
   

  },[])


  return (
    <div>
  <SignIn/>
    </div>
  );
}

export default App;
