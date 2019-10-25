import React, { Component } from 'react'
import Logo from './assets/img/logo.png'
import Layer1 from './assets/img/slider/wheeler.jpg'

export default class Header extends Component {
    render() {
        return (

            <header className="header-style-1 bg-color-1">
                <div className="top clearfix">
                    <div className="header-top active-sticky ptb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6 col-sm-5">
                                    <div className="left">
                                        <div className="logo">
                                            <a href="index.html"><img src={Logo} alt="Mim" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-7">
                                    <div className="right">
                                        <div className="expand-menu-open floatright">
                                            <i className="zmdi zmdi-menu"></i>
                                        </div>
                                        <nav className="mainmenu onepage-nev floatright">
                                            <ul className="clearfix">
                                                <li><a href="#home">Home</a></li>
                                                <li><a href="#about">About</a></li>
                                                <li><a href="#blog">Vlog</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainmenu-expand bg-color-3">
                        <div className="close-menu">
                            <i className="zmdi zmdi-close-circle-o"></i>
                        </div>
                        <div className="menu-logo">
                            <a href="index.html"><img src={Logo} alt="Mim" /></a>
                        </div>
                        <nav className="mainmenu-box onepage-nev">
                        <ul className="clearfix">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#blog">Vlog</a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
                <div className="bottom slider-area">
                    <div className="container">
                        <div className="row relative">
                            <div className="col-xs-12 col-sm-6 static">
                                <div className="slider-text percent-50">
                                    <h5 className="mb-11">Hello, my name is</h5>
                                    <h1 className="mb-30">Lamont Crook</h1>
                                    <p className="font-16 line-height-28"></p>
                                    <div className="slider-button smooth-scroll mt-40">
                                        <a className="btn lg-btn" href="assets/other/resume.pdf">Resume</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="slider-img text-right">
                                    <img src={Layer1} alt="Layer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            

        )
    }
}