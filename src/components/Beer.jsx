import '../styles/beer.css';

const Beer = ({beer}) =>{
    return(
        <div className="our-beers-beer">
            <div className="our-beers-beer-img">
                <img src={beer.image_url} alt="beer img"/>
            </div>
            <div className="our-beers-beer-info">

            </div>
        </div>
    )
}

export default Beer