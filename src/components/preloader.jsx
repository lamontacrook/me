import React, { Component } from 'react'
import Logo from './assets/img/logo.png'
import Object from './assets/css/style.css'


export default class Preloader extends Component {
    render() {
        return (
            <div>
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <img src={Logo} alt="Mim" />
                        <div className={Object} id="object_three"></div>
                    </div>
                </div>
            </div>

            <div id="home"></div>
            </div>

        )
    }
}