import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import '../styles/header.css';


const Header = ({ theme, handleTheme }) => {
    const switchRef = useRef();

    const handleClick = () => {
        switchRef.current.classList.toggle('clicked')
    }

    return (
        <header>
            <div className="header-container">
                <label className="switch" ref={switchRef}>
                    <input type="checkbox" className={`${theme}-mode`} onChange={handleTheme} onClick={handleClick} />
                    <span className={`slider round ${theme}-slider`}>{theme==='dark' ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}</span>
                </label>
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