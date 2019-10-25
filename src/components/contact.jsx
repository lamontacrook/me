import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
      
		<section className="contact-area light-bg section-padding" id="contact">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className="left">
							<div className="section-title mb-30">
								<h2 className="mb-15">GET IN TOUCH</h2>
								<div className="horizontal-line mb-20">
									<div className="top"></div>
									<div className="bottom"></div>
								</div>
								<p>There are many variations of pssges of Lorem Ipsum available, bu in some form, by</p>
							</div>
							<ul className="contact-text clearfix">
								<li>
									<i className="zmdi zmdi-phone-in-talk"></i>
									<h4 className="montserrat weight-regular no-margin capitalize">Phone</h4>
									<span><a className="montserrat weight-regular" href="tel:+88-669-658-6586">+88 669 658 6586</a></span>
								</li>
								<li>
									<i className="zmdi zmdi-email"></i>
									<h4 className="montserrat weight-regular no-margin capitalize">Email</h4>
									<span><a className="montserrat weight-regular capitalize" href="mailto:regaltheme@email.com">regaltheme@email.com</a></span>
								</li>
								<li>
									<i className="zmdi zmdi-home"></i>
									<h4 className="montserrat weight-regular capitalize no-margin">Our Location</h4>
									<span className="montserrat weight-regular capitalize">Location Name,here.US</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-8">
						<div className="right">
							<div className="contact-form pt-40">
								<form className="custom-input contact_form" id="contact_form" action="contact-form.php" method="post">
									<div className="row name-email">
										<div className="col-xs-12 col-sm-6">
											<input type="text" id="contact_name" name="name" placeholder="Your Name" />
										</div>
										<div className="col-xs-12 col-sm-6">
											<input type="email" id="contact_email" name="email" placeholder="Your Email" />
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12">
											<textarea className="mt-50" name="message" id="contact_message" rows="6" placeholder="Your Message"></textarea>
											<button className="btn montserrat weight-regular uppercase mt-30" type="submit" name="submit" id="contact_submit" data-complete-text="Well done!">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
                )
    }
}