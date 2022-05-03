import { useEffect, useState } from "react";
import axios from 'axios';
import MovieList from "./MovieList";

function Filmai() {


  const [users, setUsers] = useState([]);//movielist
  const [inputText, setInputText] = useState('');
  const [clickMove, setClickMove] = useState();


  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13e0bada9ae6d703bc0c36703e5628fa&language=en-US&query=${inputText}`)
      .then(res => {
        console.log(res.data);
        setUsers(res.data.results);

      })
  }, [inputText]);

  const handeleImputChange = (e) => {
    const searchWord = e.target.value;
    setInputText(searchWord)
    //console.log(setInputText);

    const newFilter = setUsers.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setUsers([]);
    } else {
      setUsers(newFilter);
    }
  };

  const heandelSelect = (value) => {
    setClickMove(value)

  }

  return (

    <>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="filmu paieska" value={inputText} onChange={(e) => handeleImputChange(e)}>
          </input>
        </div>
        {users.length !== 0 && (<div className="dataResult">{users.slice(0, 8).map((value) => {
          return (
            <div className="dataItem2" >
              <li className="dataItem" onClick={() => heandelSelect(value)} filmai={users}>
                <h3>{value.title} </h3>
                <p>{value.vote_average} Rating, {value.release_date.substring(0, 4)}</p>
              </li>
            </div>
          );
        })}
        </div>
        )}
        {clickMove && <MovieList className="MovieList" filmas={clickMove}></MovieList>}
      </div>
    </>
  )
}

export default Filmai;