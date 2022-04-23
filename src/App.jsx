import React from 'react';
import './App.css';
import Form from './Components/Form';
import filmas from './Components/movie.svg';
import star from './Components/star.svg';
import ApiKey from './Components/ApiKey';



import './crud.scss';
function App() {
  return (
    <div className="app">
        <div className="top">
   
      <img className='logo' src={filmas} alt=''/>
        <ApiKey></ApiKey>
        <Form></Form>
        {/* <img className='star' src={star} alt=''/> */}
      
       <h1></h1>
         </div>

    </div>
  );
}

export default App;


