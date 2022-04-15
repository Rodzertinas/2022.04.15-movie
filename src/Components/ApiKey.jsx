import { useEffect, useState } from 'react';

function ApiKey() {

    const [api, setApi] = useState([]);

    useEffect(() => {



        fetch('https://api.themoviedb.org/3/movie/550?api_key=1b359e5e7144c9fea70db6d5bb29245d')
            .then(response => response.json())

            .then(data => setApi(data.message))


    }, []);

    return (
        <ul>
            {
                api
                // users.map(y => <li key={y.name}>{y.name}</li>)
            }
        </ul>
    )
}

export default Users;