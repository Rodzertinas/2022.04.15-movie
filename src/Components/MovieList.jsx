
// import { v4 as uuidv4 } from 'uuid';
// key = {uuidv4()}
import star from '../Components/star.svg';
 { <img className='star' src={star} alt=''/> }


function MovieList({ filmai }) {



    const  balas = `/10 `;

console.log(balas.toLowerCase());
<p className='balas'>{balas}</p>


    return (
     

        <div className='movie_list'>
            {
                filmai.map(filmas =>
                    <div className="all_list">
                        <h2 className='movie_title'> {filmas.title}</h2>
                        <p className='movie_language'>  {`Original language: `}{filmas.original_language.toUpperCase()}</p>
                        <p className="movie_popularity">
                        <img className='popularity_star' src={star} alt=''/>{filmas.vote_average}{`/10`}</p>
                        <p className='movie_vote'>{filmas.vote_count}{` votes `}</p>
                        <p className='movie_overview'>{filmas.overview}</p>
                        <img className='pic' src={`https://image.tmdb.org/t/p/original/${filmas.poster_path}`} alt="pic" />
                    </div>
                    
                            
                             
                        

                )
            }
        </div>

    )
}

export default MovieList;


{/* 
            {filmai.map(filmas => <h1>{filmas.title} </h1> 
            
            
            ) }

{
            {filmas.popularity} } */}