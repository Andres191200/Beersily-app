import ReactDOM from 'react-dom';
import '../styles/beerModal.css';


const BeerModal = ({beer, modalBeerIsOpen}) =>{
    const {name, img, price} = beer
    
    return ReactDOM.createPortal(
        <div className={`main-modal-container ${modalBeerIsOpen && 'open'}`}>
            <h1>{name}</h1>
        </div>,
        document.getElementById('beer-modal')
    )
}

export default BeerModal;