import React from "react";
import PropTypes from "prop-types";
import { FaCreditCard } from "react-icons/fa";

const achievementCard = ({dataAchievement}) => {
    const {index, title, img} = dataAchievement;
    return(
        <div id={`achieveCard-${index}`} className="achieveCard"
            style={{background: `linear-gradient(0deg, rgba(93, 125, 233, 0.65), rgba(93, 125, 233, 0.65)), url(${img})`}}
        >
            <p>{title}</p>
        </div>
    )
}

FaCreditCard.propTypes ={
    property: PropTypes.object.isRequired
}

export default achievementCard;