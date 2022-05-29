const URL = 'https://api.punkapi.com/v2/beers ';

const GetBeers = () =>{  
    return fetch(URL)
    .then(res => res.json())
}

export default GetBeers;