import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {LinkedIn, GitHub} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Know me</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Developer</h3>
                        <p>Front end Developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Soy un chico joven con muchas ganas de aprender y seguir desarrollándome como programado - desarrollador. </p>
                    <p>Me apasiona este mundo, también como hobby me encanta escuchar música y ver películas y series.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/jairo-sanchez-malaga/"}  title={"jairosanchez-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://github.com/jairosanchezb94/"}  title={"jairosanchez-"}>
                            <GitHub/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;