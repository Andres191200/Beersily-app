import '../styles/aboutus.css';
import '../styles/styles.css';
import AboutUsCard from './AboutUsCard'

const AboutUs = () => {
    return (
        <div className="main-about-us-container">
            <div className="title-container">
                <h1>About us</h1>
            </div>
            <div className="about-us-info">
                <div className="about-us-cards-container">
                    <AboutUsCard img='https://i.discogs.com/7JUO1Hvw5XngybfFrry1HLHwSRLuCuVIMFF8agetJd0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTc5Mzg3/NC0xMTc2OTA3MTAy/LmpwZWc.jpeg' role='Co-Owner' name='Spongebob' />
                    <AboutUsCard img='https://memegenerator.net/img/images/12318885.jpg' role='Owner' name='Squidward Tentacles'/>
                    <AboutUsCard img='https://i.pinimg.com/564x/c2/48/6c/c2486c446f4cc23d290008c49f7eae07.jpg' role='Co-Owner' name='Krusty Crab'/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;