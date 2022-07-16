import { useEffect, useState } from "react";
import { BeerModalContextProvider } from '../context/beerModalContext';
import GetBeers from "../utils/GetBeers";
import Welcome from "./Welcome";
import WhyUs from "./WhyUs";
import Beers from "./Beers";
import AboutUs from "./AboutUs";

const MainPage = () => {
    const [beers, setBeers] = useState(null) //eslint-disable-line

    useEffect(() => {
        GetBeers().then(beers => setBeers(beers))
    }, [])

    return (
        <div>
            <Welcome />
            <WhyUs />
            <BeerModalContextProvider>
                <Beers />
            </BeerModalContextProvider>
            <AboutUs/>
        </div>
    )
}

export default MainPage;