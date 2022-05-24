import '../styles/header.css';

const Header = () =>{
    return(
        <header>
            <div className="header-container">
                <ul>
                    <li className="header-item"><a href="#home">Home</a></li>
                    <li className="header-item"><a href="#beers">Beers</a></li>
                    <li className="header-item"><a href="#about">About us</a></li>
                    <li className="header-item"><a href="#contact">Contact</a></li>
                    <li className="header-item"><a href="#whyus">Why us?</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;