import React from 'react';
import './App.css';
import Form from './Components/Form';
import filmas from './Components/movie.svg';
import Close from './Components/Close';





import './crud.scss';
function App() {
  return (
    <div className="app">
        <div className="top">
        <Close></Close>
      <img className='logo'   src={filmas} alt=''/>
        <Form></Form>
         </div>

    </div>
  );
}

export default App;


