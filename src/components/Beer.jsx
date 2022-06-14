import '../styles/beer.css'

const Beer = ({ beer }) => {
    const { name, price, img } = beer
    return (
        <div className="beer"> 
            <img alt='beer' src={img}/>
            <div className="beer-info">
                <div className="price">
                    <p>{price} EUR</p>
                </div>
                <div className="rate">
                    <p>rate</p>
                </div>
            </div>
        </div>
    )
}

export default Beer