import { useEffect, useState } from "react";
import { BeerModalContextProvider } from '../context/beerModalContext';
import GetBeers from "../utils/GetBeers";
import Welcome from "./Welcome";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Beers from "./Beers";

const MainPage = () => {
    const [beers, setBeers] = useState(null) //eslint-disable-line
    const [theme, setTheme] = useState('dark');

    const handleTheme = (e) => {
        e.target.checked ? setTheme('light') : setTheme('dark')
    }

    useEffect(() => {
        GetBeers().then(beers => setBeers(beers))
    }, [])

    return (
        <div>
            <Header theme={theme} handleTheme={handleTheme} />
            <Welcome />
            <WhyUs />
            <BeerModalContextProvider>
                <Beers />
            </BeerModalContextProvider>
        </div>
    )
}

export default MainPage;