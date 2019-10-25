import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (


            <section className="blog-area bg-color-1 section-padding" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-title text-center mb-60">
                                <h2 className="mb-20">Vlog</h2>
                                <div className="horizontal-line">
                                    <div className="top"></div>
                                    <div className="bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobile-mb-30 col-xs-12 col-sm-4">
                            <div className="single-blog clearfix">
                                
                                <iframe width="370" height="224" 
                                    src="https://www.youtube.com/embed/P9NJeAr0N5s" 
                                    title="Profile Targeting with Adobe Target" frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <div className="date-comment plr-20 ptb-20 clearfix">
                                    <div className="left floatleft">
                                        <h6 className="capitalize montserrat no-margin weight-regular"><i className="zmdi zmdi-calendar"></i> 1 Mar 2019</h6>
                                    </div>
                                    
                                </div>
                                <div className="blog-title clearfix">
                                    <div className="left floatleft">
                                        <a href="https://www.youtube.com/watch?v=P9NJeAr0N5s" target="_blank" rel="noopener noreferrer">
                                            <h4 className="capitalize montserrat no-margin weight-regular">Profile Targeting</h4>
                                        </a>
                                    </div>
                                    <div className="right floatright">
                                        <a href="https://www.youtube.com/watch?v=P9NJeAr0N5s" target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-mb-30 col-xs-12 col-sm-4">
                            <div className="single-blog clearfix">
                            <iframe width="370" height="224" title="7 Steps to Deploy ECID" src="https://www.youtube.com/embed/q996x7kKrys" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                                <div className="date-comment plr-20 ptb-20 clearfix">
                                    <div className="left floatleft">
                                        <h6 className="capitalize montserrat no-margin weight-regular"><i className="zmdi zmdi-calendar"></i> 23 Feb 2018</h6>
                                    </div>
                                    
                                </div>
                                <div className="blog-title clearfix">
                                    <div className="left floatleft">
                                        <a href="https://youtu.be/q996x7kKrys" target="_blank" rel="noopener noreferrer">
                                            <h4 className="capitalize montserrat no-margin weight-regular">7 Steps to Deploy ECID</h4>
                                        </a>
                                    </div>
                                    <div className="right floatright">
                                        <a href="https://youtu.be/q996x7kKrys" target="_blank" rel="noopener noreferrer"><i className="zmdi zmdi-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="single-blog clearfix">
                            <iframe width="370" height="224" title="ECID: A Quick Overview" src="https://www.youtube.com/embed/UK07Kk5A2l4" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                                <div className="date-comment plr-20 ptb-20 clearfix">
                                    <div className="left floatleft">
                                        <h6 className="capitalize montserrat no-margin weight-regular"><i className="zmdi zmdi-calendar"></i> 15 Feb 2018</h6>
                                    </div>
                                    
                                </div>
                                <div className="blog-title clearfix">
                                    <div className="left floatleft">
                                        <a href="https://youtu.be/UK07Kk5A2l4">
                                            <h4 className="capitalize montserrat no-margin weight-regular">ECID: A Quick Overview</h4>
                                        </a>
                                    </div>
                                    <div className="https://youtu.be/UK07Kk5A2l4">
                                        <a href="light-blog-details.html"><i className="zmdi zmdi-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}