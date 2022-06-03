import '../styles/styles.css';
import '../styles/beers.css';

const Beers = () => {
    return (
        <div className="beers-main-container">
            <div className="beers-container">
                <div className="beers-info-container">
                    <h1>Our beers...</h1>
                    <p>These are our best beers!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus dolores expedita unde est iure ab illo placeat assumenda tempora, illum omnis enim ipsum eos sapiente? Assumenda, consequatur tenetur?</p>
                </div>
                <div className="best-beers-container"></div>
            </div>
        </div>
    )
}

export default Beers;