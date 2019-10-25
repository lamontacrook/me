import React, { Component } from 'react'
import Workshop from './assets/img/img_4070.jpg'

export default class About extends Component {
	render() {
		return (


			<section className="about-area section-padding light-bg" id="about">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="section-title text-center mb-60">
								<h2 className="mb-20">About Me</h2>
								<div className="horizontal-line">
									<div className="top"></div>
									<div className="bottom"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<div className="left mr-40">
								<h3 className="font-22 capitalize">Howdy!</h3>
								<p className="font-16 line-height-28">I have always walked the line between art and science. 
								I've always applied creative and design thinking to my life, family, and work. In questioning and 
								rethinking common approaches and business processes, innovation often takes shape. In my career, 
								technology has imposed a consistent newness. This newness has surfaced in how we communicate, 
								shop, engage and digest information.</p>
<br/>
								<p className="font-16 line-height-28">Being at the forefront of digital experience delivery, I 
								have had the opportunity to shape the everyday engagement of our customers. Core to my personal 
								mission is my direct work with analysts, content creators, and developers to help demonstrate 
								how those roles are central to experience creation and delivery.</p>
<br/>
								<p className="font-16 line-height-28">I have strong technical and communications skills and they 
								have always served me well in my endeavors. With years of success in development, marketing technology, 
								and digital experience, I have a proven track record reimagining programs and processes to address 
								today's ever-changing business world.</p>

								<div className="about-button mt-30">
									<a className="btn" href="assets/other/resume.pdf">Download my cv</a>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-push-1 col-md-5">
							<div className="right skill-progress">

								<img src={Workshop} alt="workshop" />
							</div>
						</div>
					</div>
				</div>
			</section>






		)
	}
}