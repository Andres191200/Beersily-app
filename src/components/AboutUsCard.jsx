const AboutUsCard = ({ img, role, name }) => {
    return (
        <div className="about-us-card">
            <div className="profile-photo-container">
                <img src={img} alt="profile" className="profile-photo" />
            </div>
            <h1>{role}</h1>
            <h3>{name}</h3>
        </div>
    )
}

export default AboutUsCard;