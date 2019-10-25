import React, { Component } from 'react'
import Background from '../images/bg.jpg';

export default class Profile extends Component {
    render() {
        return (
            
			<div class="profile">

                
                <div class="slide" style={{ backgroundImage: `url(${Background})` }}></div>

                
                <div class="image">
                    <img src="images/profile.png" alt="" />
                </div>

               
                <div class="title">Lamont Crook</div>
                <div class="subtitle">Technologist</div>

                
                <div class="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/"><span class="fab fa-dribbble"></span></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><span class="fab fa-twitter"></span></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><span class="fab fa-github"></span></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.spotify.com/"><span class="fab fa-spotify"></span></a>
                    <a target="_blank" rel="noopener noreferrer"x href="https://stackoverflow.com/"><span class="fab fa-stack-overflow"></span></a>
                </div>
                
                <div class="lnks">
                    <a href="#" class="lnk">
                        <span class="text">Download CV</span>
                        <span class="ion ion-archive"></span>
                    </a>
                    <a href="#" class="lnk discover">
                        <span class="text">Contact Me</span>
                        <span class="arrow"></span>
                    </a>
                </div>
                </div>

        )
    }
}