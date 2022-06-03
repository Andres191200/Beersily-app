import { useEffect, useState } from "react";
import GetBeers from "../utils/GetBeers";
import Welcome from "./Welcome";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Beers from "./Beers";

const MainPage = () => {
    const [beers, setBeers] = useState(null)
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
            <Beers/>
        </div>
    )
}

export default MainPage;