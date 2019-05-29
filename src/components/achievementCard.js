import React from "react";
import PropTypes from "prop-types";



const achievementCard = ({dataAchievement,rightCard}) => {
    const {index, title, img} = dataAchievement;
    
        return(
        
            <div id={`achieveCard-${index >= rightCard? `hide` : index}`} className="achieveCard"
                style={{background: `linear-gradient(0deg, rgba(93, 125, 233, 0.85), rgba(93, 125, 233, 0.85)), url(${img})`, backgroundSize: `cover`}}
            >
                <p>{title}</p>
            </div>
        )
     
    
}

achievementCard.propTypes ={
    property: PropTypes.object.isRequired
}

export default achievementCard;