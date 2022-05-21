import { useEffect, useState } from "react";
import GetBeers from "../utils/GetBeers";
import Welcome from "./Welcome";

const MainPage = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        GetBeers().then(beers => setBeers(beers))
    }, [])

    return (
        <div>
            {beers.map(beer => <h1>{beer.name}</h1>)}
            <Welcome />
        </div>
    )
}

export default MainPage;