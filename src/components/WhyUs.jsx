import { useState } from 'react';
import '../styles/whyus.css';
import WhyUsIcon from './WhyUsIcon';
import { faScrewdriverWrench, faBuildingShield, faUsers } from '@fortawesome/free-solid-svg-icons'

const ICONS = [
    {
        id: 1,
        icon: faScrewdriverWrench,
        title: 'Eficiency',
        description: 'eficaz pt'
    },
    {
        id: 2,
        icon: faBuildingShield,
        title: 'Protection',
        description: 'prote IV'
    },
    {
        id: 3,
        icon: faUsers,
        title: 'Feedback',
        description: 'feedback'
    }
]

const WhyUs = () => {
    const [icons, setIcons] = useState(ICONS) //eslint-disable-line
    return (
        <div className="whyus-container" id="whyus">
            <h1>¿Why us?</h1>
            <div className="whyus" >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur adipisci architecto magni quasi quisquam assumenda porro quo totam deserunt! Ipsa ad minus saepe nihil iusto rem id blanditiis nesciunt. Magnam laudantium animi cupiditate, perspiciatis aperiam fugiat reiciendis unde? Vel atque dolorum, sint esse voluptate quia impedit et illo tenetur velit quod provident, optio laborum exercitationem possimus. Aut dolor nihil nam.</p>
                <div className="whyus-icons">
                    {
                        icons.map(icon => { return (<WhyUsIcon key={icon.id} props={icon} />) })
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyUs;