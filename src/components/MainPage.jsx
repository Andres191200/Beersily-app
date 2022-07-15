import { useEffect, useState } from "react";
import { BeerModalContextProvider } from '../context/beerModalContext';
import GetBeers from "../utils/GetBeers";
import Welcome from "./Welcome";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Beers from "./Beers";

const MainPage = () => {
    const [beers, setBeers] = useState(null) //eslint-disable-line

    useEffect(() => {
        GetBeers().then(beers => setBeers(beers))
    }, [])

    return (
        <div>
            <Header/>
            <Welcome />
            <WhyUs />
            <BeerModalContextProvider>
                <Beers />
            </BeerModalContextProvider>
        </div>
    )
}

export default MainPage;