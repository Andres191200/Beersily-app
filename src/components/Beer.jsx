import '../styles/beer.css'

const Beer = ({ beer }) => {
    const { name, price, img, type } = beer
    return (
        <div className="beer">
            <div className="name">
                <span>{name}</span>
            </div>
            <img alt='beer' src={img} />
            <div className="beer-info">
                <div className="price">
                    <p>{price} EUR</p>
                </div>
                <div className="type">
                    <p>{type}</p>
                </div>
            </div>
        </div>
    )
}

export default Beer