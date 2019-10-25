import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            
		<section className="portfolio-area portfolio-one light-bg section-padding clearfix" id="portfolio">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="section-title text-center mb-30">
							<h2 className="mb-20">My Portfolio</h2>
							<div className="horizontal-line">
								<div className="top"></div>
								<div className="bottom"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="all-portfolio">
							<div className="portfolio-menu text-center">
								<ul className="clearfix mb-50">
									<li data-filter="*" className="active">All</li>
									<li data-filter=".web">Web</li>
									<li data-filter=".design">Design</li>
									<li data-filter=".new">new</li>
									<li data-filter=".gallery">Print</li>
									<li data-filter=".work3d">3d work</li>
								</ul>
							</div>
						</div>
						<div className="portfolio-grid">
							<div className="grid-item new gallery percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/w1.jpg" alt="Mim" />
									<div className="zoom-icon">
										<a href="assets/img/portfolio/w1.jpg" className="fancybox">
											<i className="zmdi zmdi-filter-center-focus"></i>
										</a>
									</div>
									<div className="project-title text-left">
										<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
										<p className="montserratlight">Branding</p>
									</div>
								</div>
							</div>
							<div className="grid-item new work3d design gallery work3d percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/h1.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a href="light-portfolio-details.html">
												<i className="zmdi zmdi-link"></i>
											</a>
										</div>
									</div>
									<div className="project-title text-left">
										<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
										<p className="montserratlight">Branding</p>
									</div>
								</div>
							</div>
							<div className="grid-item web design web gallery percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/w2.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a className="various fancybox" data-fancybox-type="iframe" title="The Butterfly And Flower" href="	https://www.youtube.com/embed/zQ9tVUEI4J4?&autoplay=1">
												<i className="zmdi zmdi-play"></i>
											</a>
										</div>
										<div className="project-title text-left">
											<h4 className="font-20 montserrat weight-regular capitalize no-margin">The Butterfly And Flower</h4>
											<p className="montserratlight">Video</p>
										</div>
									</div>
								</div>
							</div>
							<div className="grid-item new web gallery work3d percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/w3.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a href="assets/img/portfolio/w3.jpg" className="fancybox">
												<i className="zmdi zmdi-filter-center-focus"></i>
											</a>
										</div>
										<div className="project-title text-left">
											<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
											<p className="montserratlight">Branding</p>
										</div>
									</div>
								</div>
							</div>
							<div className="grid-item new design web gallery work3d percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/h2.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a href="assets/img/portfolio/h2.jpg" className="fancybox">
												<i className="zmdi zmdi-filter-center-focus"></i>
											</a>
										</div>
										<div className="project-title text-left">
											<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
											<p className="montserratlight">Branding</p>
										</div>
									</div>
								</div>
							</div>
							<div className="grid-item new web gallery percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/w4.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a href="assets/img/portfolio/w4.jpg" className="fancybox">
												<i className="zmdi zmdi-filter-center-focus"></i>
											</a>
										</div>
										<div className="project-title text-left">
											<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
											<p className="montserratlight">Branding</p>
										</div>
									</div>
								</div>
							</div>
							<div className="grid-item new design web work3d percent-33">
								<div className="single-portfolio overlay light-1 text-center">
									<img src="assets/img/portfolio/w5.jpg" alt="Mim" />
									<div className="title plr-40 text-center">
										<div className="zoom-icon">
											<a href="light-portfolio-details.html">
												<i className="zmdi zmdi-link"></i>
											</a>
										</div>
										<div className="project-title text-left">
											<h4 className="font-20 montserrat weight-regular capitalize no-margin">Contrary to popular belief</h4>
											<p className="montserratlight">Branding</p>
										</div>
									</div>
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