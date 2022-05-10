
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

function Form() {

  const [api, setApi] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selected, setSelected] = useState();
  const [active, setActive] = useState (false);
  const close = () => {
    setApi ([])
  }

  useEffect(() => {
    if (inputText.length > 2 ) {
  
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b359e5e7144c9fea70db6d5bb29245d&language=en-US&query=${inputText}`)
      .then(res => {
        console.log(res);
        return setApi(res.data.results)

      });
}
  }, [inputText]);

  const handleInputChange = (event) => {
    setActive(true)
    setInputText(event.target.value)
  }
  const handleSelect = (filmas) => {
    setActive(false)
    setSelected(filmas)}
  

  return (
    <>
    <div onClick =  {close}>
     
      <input className="input_search" 
      type = 'search'
      placeholder="Enter movie name.." 
      onChange={(event) => handleInputChange(event)} 
       />
 {/* <span onClick =  {close}>+</span> */}
      <div className='movies-list'>
        <ul className='results' >
          {api.length > 0 && active? 
            api.slice(0, 8).map(filmas => (
              <li className="onclick" onClick={() => handleSelect(filmas)}key={filmas.id}>
            <div>
                 {filmas.title} <br />
                 <div className="rating">
                 {filmas.vote_average }{`Rating,`}
                </div>
            </div>

                
      
              </li>
            ))
          : ''}     
        </ul>
        {selected && <MovieList filmas={selected} />} 
      </div>
      </div>
    </>
   


  )
}

export default Form;