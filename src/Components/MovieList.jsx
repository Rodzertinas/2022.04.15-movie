
// import { v4 as uuidv4 } from 'uuid';
// key = {uuidv4()}

function MovieList({ filmai }) {
   
    return (

        <div className='movie_list'>
                    {
                        filmai.map(filmas => 
                        <div>
                            <h2 className='movie_title'>{filmas.title}</h2>
                            <p className='movie_language'>{`Original language: `}{filmas.original_language}</p>

                            <p className='movie_overview'>{filmas.overview}</p>
                          
                            {/* <img src={filmas.backdrop} alt="" /> */}
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