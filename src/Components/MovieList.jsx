import star from '../Components/star.svg';
{ <img className='star' src={star} alt='' /> }

// ########################################################################
function MovieList({ filmas }) {

    return (


        <div className='movie_list'>
            {
                // filmai.map(filmas =>
                    <div>
                        <p className='border_bottom'>___________________________________________________________________________________________________________________________________________________________________</p>

                        <div className="all_list"  >

                            <div className='left_side_list'>
                                <img className='pic' src={filmas.poster_path ? `https://image.tmdb.org/t/p/original/${filmas.poster_path} `: 'no ok' } alt="pic" />
                            </div>
                            <div className='right_side_list'>
                                <h2 className='movie_title'> {filmas.title}</h2>
                                <p className='movie_language'>  {`Original language: `}{filmas.original_language.toUpperCase()}</p>
                                <img className='popularity_star' src={star} alt='' />
                                <p className="movie_popularity" > {filmas.vote_average}</p>
                                <p className='ten'>  {`/10`} </p>
                                <p className='movie_vote'>{filmas.vote_count}{` votes `}</p>
                                <p className='movie_overview'>{filmas.overview}</p>
                            </div>

                        </div> 
                    </div>

                // )
            }
        </div>
    )
}
export default MovieList;


