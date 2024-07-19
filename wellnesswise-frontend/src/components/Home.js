import React from 'react';
import './Home.css';
import './HomeBackground.scss';

function Home() {
    return (
        <div>
            {/* Slider */}
            <div className='background-effect'>
            <div className="homeMessage">
            <h1>Welcome to Wellness Wise</h1>
            <p>Your journey to a healthier, happier life begins here. At Wellness Wise, we’re dedicated to helping you achieve optimal well-being with our comprehensive health and wellness solutions.</p>
            <div className='buttonPad'>
            <button className="cta-button">Discover More</button>
            <br />
            <br />
           <button className='cta-button'>Book an Appointment</button>
            </div>
            </div>
            </div>

            {/* Key Features */}
            <section id="services" className="key-features">
                <div className="container">
                    <div className="inner-title">
                        <h2>SERVICES</h2>
                        <p>Take a look at some of our key features</p>
                    </div>
                    <div className="row">
                        {[
                            {
                                icon: 'fas fa-hospital-alt',
                                title: 'Newest Technologies',
                                description: 'We leverage cutting-edge technologies to deliver personalized and efficient health solutions, ensuring the highest standards of care on your wellness journey.'
                            },
                            {
                                icon: 'fas fa-user-md',
                                title: 'Experienced Doctors',
                                description: 'Our team of seasoned professionals combines deep expertise with compassionate care, providing you with trusted guidance and exceptional health solutions.'
                            },
                            {
                                icon: 'fas fa-briefcase-medical',
                                title: 'High Customer Satisfaction',
                                description: 'We prioritize your well-being, delivering personalized care and exceptional service to ensure every visit exceeds your expectations.'
                            },
                            {
                                icon: 'far fa-thumbs-up',
                                title: 'High Quality Treatments',
                                description: 'We offer top-notch, evidence-based treatments to ensure the best outcomes and a healthier future for you.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4 col-sm-6">
                                <div className="single-key">
                                    <i className={feature.icon}></i>
                                    <h5>{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* With Medical */}
            <section id="about_us" className="with-medical">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 txtr">
                        <h4>
                                Why Choose Health Care with <br />
                                <span>Wellness Wise</span>
                            </h4>
                            <br />
                            <img className='about-image' src={require('../assets/a-person-smiles-holding-a-water-bottle-and-a-yoga-mat.jpg')} alt="Why Choose Us" />
                        </div>
                        <div className="col-lg-6 col-md-12 txtr">
                            
                            <p>At <span>Wellness Wise</span>, we elevate your healthcare experience with advanced technology and compassionate care. Our expert team delivers personalized treatments tailored to your unique needs, ensuring top-quality care in a supportive environment.</p>
                            <p>We offer a comprehensive range of services, from routine check-ups to specialized treatments, all designed to support your overall health. Our holistic approach integrates traditional practices with innovative wellness strategies, focusing on both physical and mental well-being.</p>
                            <p>Choosing <span>Wellness Wise</span> means partnering with a dedicated team committed to exceptional care and high patient satisfaction. Experience superior healthcare that truly makes a difference—choose Wellness Wise for a healthier, happier you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section id="contact_us" className="contact-us-single">
                <div className="row no-margin">

                    <div className="col-sm-6 cop-ck">
                        <h2>Contact Form</h2>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Enter Name:</label></div>
                            <div className="col-sm-8"><input type="text" placeholder="Enter Name" name="name" className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Email Address:</label></div>
                            <div className="col-sm-8"><input type="text" name="email" placeholder="Enter Email Address" className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Mobile Number:</label></div>
                            <div className="col-sm-8"><input type="text" name="mobile" placeholder="Enter Mobile Number" className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Enter Message:</label></div>
                            <div className="col-sm-8">
                                <textarea rows="5" placeholder="Enter Your Message" className="form-control input-sm"></textarea>
                            </div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label></label></div>
                            <div className="col-sm-8">
                                <button className="btn btn-success btn-sm">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
