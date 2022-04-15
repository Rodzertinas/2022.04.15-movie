import React from 'react';
import './App.css';
import Form from './Components/Form';
import filmas from './Components/movie.svg'

// import ApiKey from './Components/ApiKey';




import './crud.scss';
function App() {
  return (
    <div className="app">
        <div className="top">
      
      <img className='logo' src={filmas}/>

        <Form></Form>
       <button></button>
         </div>

    </div>
  );
}

export default App;


