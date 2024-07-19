import React from 'react';
import './Home.css';
import backgroundImage from '../assets/vecteezy_generative-ai-burning-candle-on-beige-background-aesthetic_25517754.jpg'

function Home() {
    return (
        <div>
            {/* Slider */}
            <div className='Home'>
            <div className="homeMessage">
            <h1>Welcome to Wellness Wise</h1>
            <p>Your journey to a healthier, happier life begins here. At Wellness Wise, we’re dedicated to helping you achieve optimal well-being with our comprehensive health and wellness solutions.</p>
            <button className="cta-button">Discover More</button>
            </div>
            </div>

            {/* Key Features */}
            <section id="services" className="key-features">
                <div className="container">
                    <div className="inner-title">
                        <h2>Our Key Features</h2>
                        <p>Take a look at some of our key features</p>
                    </div>
                    <div className="row">
                        {[
                            {
                                icon: 'fas fa-hospital-alt',
                                title: 'Newest Technologies',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
                            },
                            {
                                icon: 'fas fa-user-md',
                                title: 'Experienced Doctors',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
                            },
                            {
                                icon: 'fas fa-briefcase-medical',
                                title: 'High Customer Satisfaction',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
                            },
                            {
                                icon: 'fas fa-capsules',
                                title: 'Pharma Pipeline',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
                            },
                            {
                                icon: 'fas fa-prescription-bottle-alt',
                                title: 'Pharma Team',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
                            },
                            {
                                icon: 'far fa-thumbs-up',
                                title: 'High Quality Treatments',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.'
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
                        <div className="col-lg-6 col-md-12">
                            <img src="assets/images/why.jpg" alt="Why Choose Us" />
                        </div>
                        <div className="col-lg-6 col-md-12 txtr">
                            <h4>
                                Why Choose Health Care with <br />
                                <span>Medical Hospital</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
                            <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog */}
            <div id="blog" className="blog">
                <div className="row session-title">
                    <h2>Latest Blog</h2>
                    <p>We can talk for a long time about the advantages of our Dental clinic before other medical treatment facilities. But you can read the following facts in order to make sure of all pluses of our clinic:</p>
                </div>
                <div className="container">
                    <div className="row">
                        {[
                            {
                                image: 'assets/images/blog/blog_01.jpg',
                                title: 'Why Primary Treatment is Important?',
                                description: 'Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the',
                                link: 'blog_single.html'
                            },
                            {
                                image: 'assets/images/blog/blog_02.jpg',
                                title: 'Why Primary Treatment is Important?',
                                description: 'Lorem Ipsum, type lorem then press the shortcut. The default keyboard shortcut is the same keyboard shortcut is the',
                                link: 'blog_single.html'
                            }
                        ].map((post, index) => (
                            <div key={index} className="col-md-6 col-sm-12">
                                <div className="blog-singe no-margin row">
                                    <div className="col-sm-5 blog-img-tab">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="col-sm-7 blog-content-tab">
                                        <h2>{post.title}</h2>
                                        <p>
                                            <i className="fas fa-user"><small>Admin</small></i>
                                            <i className="fas fa-eye"><small>(12)</small></i>
                                            <i className="fas fa-comments"><small>(12)</small></i>
                                        </p>
                                        <p className="blog-desic">{post.description}</p>
                                        <a href={post.link}>Read More <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div id="gallery" className="gallery">
                <div className="container">
                    <div className="gallery-filter d-none d-sm-block">
                        <button className="btn btn-default filter-button" data-filter="all">All</button>
                        <button className="btn btn-default filter-button" data-filter="hdpe">Dental</button>
                        <button className="btn btn-default filter-button" data-filter="sprinkle">Cardiology</button>
                        <button className="btn btn-default filter-button" data-filter="spray">Neurology</button>
                        <button className="btn btn-default filter-button" data-filter="irrigation">Laboratory</button>
                    </div>
                    <br />
                    <div className="row">
                        {[
                            'gallery_01.jpg',
                            'gallery_02.jpg',
                            'gallery_03.jpg',
                            'gallery_04.jpg',
                            'gallery_05.jpg',
                            'gallery_06.jpg'
                        ].map((img, index) => (
                            <div key={index} className={`gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ${index % 2 === 0 ? 'hdpe' : 'spray'}`}>
                                <img src={`assets/images/gallery/${img}`} className="img-responsive" alt={`Gallery item ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <section className="our-team">
                <div className="container">
                    <div className="inner-title row">
                        <h2>Our Team</h2>
                        <p>Take a look at our Team</p>
                    </div>
                    <div className="row team-row">
                        {[
                            { image: 'team-memb1.jpg', name: 'David Kanuel', title: 'Facial Surgeon' },
                            { image: 'team-memb2.jpg', name: 'David Kanuel', title: 'Facial Surgeon' },
                            { image: 'team-memb3.jpg', name: 'David Kanuel', title: 'Facial Surgeon' },
                            { image: 'team-memb4.jpg', name: 'David Kanuel', title: 'Facial Surgeon' }
                        ].map((member, index) => (
                            <div key={index} className="col-md-3 col-sm-6">
                                <div className="single-usr">
                                    <img src={`assets/images/team/${member.image}`} alt={member.name} />
                                    <div className="det-o">
                                        <h4>{member.name}</h4>
                                        <i>{member.title}</i>
                                    </div>
                                </div>
                            </div>
                        ))}
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
