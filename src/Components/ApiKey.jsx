import { useEffect, useState } from 'react';

function ApiKey() {

    const [api, setApi] = useState([]);
    // setApi(data))
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=1b359e5e7144c9fea70db6d5bb29245d')
            .then(res => res.json())
            .then(data =>{
            console.log(data)
        })

    }, []);

    return (
        <ul>
            {
                //   h1.innerText = original_language.data
                // api.map(y => <li key={y.name}>{y.name}</li>)
            }
        </ul>
    )
}

export default ApiKey;