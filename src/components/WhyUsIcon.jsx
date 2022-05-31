
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyUsIcon = ({props}) => {
    const {icon, title, description} = props;
    return (       
        <div>
            <div className="icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3>{title}</h3>
            <div className="description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet inventore quos enim saepe repellat, eveniet vitae delectus perspiciatis reprehenderit, eius mollitia, architecto debitis praesentium distinctio totam? Libero dicta pariatur reprehenderit!</p>
            </div>
        </div>
    )
}

export default WhyUsIcon;