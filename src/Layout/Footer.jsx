import React from 'react';
import './Footer.css'; // Import the CSS file for additional styling

function Footer() {
    return (
        <footer className="footer navbar navbar-expand-lg bg-success mt-3 fixed-bottom" style={{ position: 'sticky', bottom: 0, zIndex: 999 }}>
            <div className="container">
                <div className="footer-content d-flex justify-content-between align-items-center">
                    <div className="footer-left" style={{ marginRight: '20px' }}>
                        {/* Company Info */}
                        <h3 className="info-title text-white">Company Info</h3>
                        <p className="info-text text-white">We are your trusted property sales partner, providing solutions that suit your needs.</p>

                        {/* Contacts */}
                        <p className="contacts text-white">Contact us: propertysaleskenya@gmail.com | Phone: +25472000300412</p>
                    </div>

                    <div className="footer-center" style={{ margin: '0 20px' }}>
                        {/* What We Do */}
                        <h3 className="what-we-do-title text-white">What We Do</h3>
                        <ul className="what-we-do-list">
                            <li className="what-we-do-item text-white">Property Sales</li>
                            <li className="what-we-do-item text-white">Real Estate Consultation</li>
                            <li className="what-we-do-item text-white">Investment Opportunities</li>
                        </ul>
                    </div>

                    <div className="footer-right d-flex flex-column align-items-center" style={{ marginLeft: '20px' }}>
                        {/* Follow Us */}
                        <h3 className="follow-us-title text-white">Follow Us</h3>

                        {/* Social Media Links */}
                        <div className="social-links">
                            <a
                                href="https://www.facebook.com/yourfacebookpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            {' '}
                            <a
                                href="https://twitter.com/yourtwitterpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            {' '}
                            <a
                                href="https://www.instagram.com/yourinstagrampage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            {' '}
                            <a
                                href="https://www.linkedin.com/company/yourlinkedinpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            {' '}
                            <a
                                href="https://www.tiktok.com/@yourtiktokpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link bg-blue text-white"
                            >
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
