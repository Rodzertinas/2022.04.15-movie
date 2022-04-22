import axios from 'axios';


import { useEffect, useState } from 'react';

function ApiKey() {

    const [api, setApi] = useState([]);

    useEffect(() => {
       axios.get('https://api.themoviedb.org/3/movie/550?api_key=1b359e5e7144c9fea70db6d5bb29245d')
            .then(res => setApi(res.data.data));
    
        
      

    }, []);

}


export default ApiKey;