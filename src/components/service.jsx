import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
      
		<section className="service-area bg-color-1 section-padding" id="service">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="section-title text-center mb-60">
							<h2 className="mb-20">My Services</h2>
							<div className="horizontal-line">
								<div className="top"></div>
								<div className="bottom"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-center">
					<div className="mobile-mb-30 col-xs-12 col-sm-6 col-md-3">
						<div className="single-service pt-50 pb-60 plr-20">
							<i className="zmdi zmdi-devices"></i>
							<h5 className="montserrat weight-medium no-margin">UI/UX DESIGN</h5>
							<hr className="mtb-15" />
							<p>There are many variatio <br /> ns of pssages of Lorm available, bu in some form, </p>
						</div>
					</div>
					<div className="mobile-mb-30 col-xs-12 col-sm-6 col-md-3">
						<div className="single-service pt-50 pb-60 plr-20">
							<i className="zmdi zmdi-favorite-outline"></i>
							<h5 className="montserrat weight-medium no-margin">web design</h5>
							<hr className="mtb-15" />
							<p>There are many variatio <br /> ns of pssages of Lorm available, bu in some form, </p>
						</div>
					</div>
					<div className="mobile-mb-30 col-xs-12 col-sm-6 col-md-3">
						<div className="single-service pt-50 pb-60 plr-20">
							<i className="zmdi zmdi-filter-center-focus"></i>
							<h5 className="montserrat weight-medium no-margin">Minimal DESIGN</h5>
							<hr className="mtb-15" />
							<p>There are many variatio ns of pssages of Lorm available, bu in some form, </p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3">
						<div className="single-service pt-50 pb-60 plr-20">
							<i className="zmdi zmdi-language-html5"></i>
							<h5 className="montserrat weight-medium no-margin">development</h5>
							<hr className="mtb-15" />
							<p>There are many variatio ns of pssages of Lorm available, bu in some form, </p>
						</div>
					</div>
				</div>
			</div>
        </section>
                )
    }
}