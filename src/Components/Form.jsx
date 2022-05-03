
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

function Form() {

  const [api, setApi] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b359e5e7144c9fea70db6d5bb29245d&language=en-US&query=${inputText}`)
      .then(res => {
        console.log(res);
        return setApi(res.data.results)
      });

  }, [inputText]);

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }
  const handleSelect = (filmas) => {setSelected(filmas)}

  return (
    <>
      <input className="input_search" 
      placeholder="Enter movie name.." 
      onChange={(event) => handleInputChange(event)} 
      type="text" />



      <div className='movies-list'>
        <ul className='results' >
          {api.length > 0 ? 
            api.slice(0, 8).map(filmas => (
              <li className="onclick" onClick={() => handleSelect(filmas)} key={filmas.id}>
             {filmas.title}
              </li>
            ))
          : ''}     
        </ul>
        {selected && <MovieList filmas={selected} />} 
      </div>
     
    </>


  )
}

export default Form;