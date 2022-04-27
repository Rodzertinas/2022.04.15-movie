
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

function Form() {

  const [api, setApi] = useState([]);
  const [inputText, setInputText] = useState('car');

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


  return (
    <>
      <input className="input_search" onChange={(event) => handleInputChange(event)} type="text" />
      <MovieList filmai={api} />

    </>


  )
}

export default Form;