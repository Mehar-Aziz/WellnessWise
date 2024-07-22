import React from 'react';
import './Home.css';
import homeImage from '../assets/Yoga practice-bro 1.png'
//import { Link } from 'react-router-dom';


function Home() {



    return (
        <div>
            {/* messafe */}
            <div id='home'>
            {/* Content Section */}
            <div className="homeMessage">
                <h1>Bend Your Mind,<br />Inspire Yourself !</h1>
                <p>Your journey to a healthier, happier life begins here. At Wellness Wise, we’re dedicated to helping you achieve optimal well-being with our comprehensive health and wellness solutions.</p>
                <div className='buttonPad'>
                    <button className="cta-button">Discover More</button>
                    <br />
                    <br />
                    <button className='cta-button'>Book an Appointment</button>
                </div>
            </div>
            {/* Image Section */}
            <div className="homeImage">
                <img src={homeImage} alt="Health and Wellness" />
            </div>
            </div>

           {/* Key Features */}
<section id="services" className="key-features">
    <div className="container">
        <div className="inner-title">
            <h2>SERVICES</h2>
            <p>Take a look at some of our key features</p>
        </div>
        <div className="features-grid">
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
                },
                {
                    icon: 'fas fa-heartbeat',
                    title: 'Comprehensive Care',
                    description: 'Our integrated approach to health and wellness covers all aspects of your well-being, ensuring you receive the care you need, when you need it.'
                }
            ].map((feature, index) => (
                <div key={index} className="feature-card">
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
            <section id="about-us" className="with-medical">
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
            <section id="contact-us" className="contact-us-single for-gap">
                
                <div className="row no-margin">

                    <div className="col-sm-6 cop-ck">
                        <h2>CONTACT US</h2>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Enter Name:</label></div>
                            <div className="col-sm-8"><input type="text"  name="name" className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Email Address:</label></div>
                            <div className="col-sm-8"><input type="text" name="email"  className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Mobile Number:</label></div>
                            <div className="col-sm-8"><input type="text" name="mobile"  className="form-control input-sm" /></div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label>Enter Message:</label></div>
                            <div className="col-sm-8">
                                <textarea rows="5"  className="form-control input-sm"></textarea>
                            </div>
                        </div>
                        <div className="row cf-ro">
                            <div className="col-sm-3"><label></label></div>
                            <div className="col-sm-8">
                                <button className="btn btn-success btn-sm">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </div>
    );
}

export default Home;
