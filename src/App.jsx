
import React from 'react';
import './App.css';
import Form from './Components/Form';
import filmas from './Components/movie.svg';
import { useState } from 'react';

// ########################################################################

// const [results, setResults] = useState([]);
// const [search, setSearch] = useState('');
// const [selected, setSelected] = useState('');


import './crud.scss';
import { getData } from './Common/getData';
function App() {
  return (
    <div className="app">
      <div className="top">
        {/* <Close   ></Close> */}
            <img className='logo'  
            src={filmas} alt=''/>
        <Form></Form>
      </div>

    </div>
  );
}

export default App;


