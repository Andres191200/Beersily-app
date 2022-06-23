const BeerModalDetails = ({ beer }) => {
    const { name, price, img, type, description } = beer;
    return (
        <div className="beer-modal-container">
            <div className="beer-modal-img">
                <img src={img} alt="beer-img" />
            </div>
            <div className="beer-modal-info">
                <div className="beer-modal-name">
                    <h1>{name}</h1>
                </div>
                <div className="beer-modal-description">
                    <p>{description}</p>
                </div>
                <div className="details">
                    <div className="beer-modal-type">{type}</div>
                    <div className="beer-modal-add-favorites"></div>
                </div>
                <div className="beer-modal-price">{price}</div>
            </div>
        </div>
    )
}

export default BeerModalDetails