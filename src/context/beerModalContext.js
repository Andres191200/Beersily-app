import { createContext, useState } from "react";

const beerModalContext = createContext();


const BeerModalContextProvider = ({ children }) => {
    const [modalBeerIsOpen, setModalBeerIsOpen] = useState(false)

    const data = {modalBeerIsOpen, setModalBeerIsOpen}

    return(
        <beerModalContext.Provider value={data}>{children}</beerModalContext.Provider>
    )
}

export {BeerModalContextProvider}
export default beerModalContext;