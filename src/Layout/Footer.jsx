// import React from 'react';
// import './Footer.css'; // Import the CSS file for additional styling

// function Footer() {
//     return (
//         <footer className="footer navbar navbar-expand-lg bg-success mt-3 fixed-bottom" style={{ position: 'sticky', bottom: 0, zIndex: 999 }}>
//             <div className="container">
//                 <div className="footer-content d-flex flex-column align-items-center">
//                     <h3 className="contact-title text-white">Contact Us</h3>
//                     <div className="footer-contacts text-white">
//                         {/* Contacts */}
//                         <p>Contact us: propertysaleskenya@gmail.com</p>
//                         <p>Phone: +25472000300412</p>
//                     </div>
                    
//                     <div className="footer-social">
//                         {/* Social Media Links */}
//                         <a
//                             href="https://www.facebook.com/yourfacebookpage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="social-link bg-blue text-white"
//                         >
//                             <i className="fab fa-facebook"></i>
//                         </a>
//                         {' '}
//                         <a
//                             href="https://twitter.com/yourtwitterpage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="social-link bg-blue text-white"
//                         >
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         {' '}
//                         <a
//                             href="https://www.instagram.com/yourinstagrampage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="social-link bg-blue text-white"
//                         >
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         {' '}
//                         <a
//                             href="https://www.linkedin.com/company/yourlinkedinpage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="social-link bg-blue text-white"
//                         >
//                             <i className="fab fa-linkedin"></i>
//                         </a>
//                         {' '}
//                         <a
//                             href="https://www.tiktok.com/@yourtiktokpage"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="social-link bg-blue text-white"
//                         >
//                             <i className="fab fa-tiktok"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
import React from 'react';
import './Footer.css'; // Import the CSS file for additional styling

function Footer() {
    return (
        <footer className="footer navbar navbar-expand-lg bg-success mt-3 fixed-bottom" style={{ position: 'sticky', bottom: 0, zIndex: 999 }}>
        <div className="container">
                <div className="footer-content d-flex justify-content-between align-items-center">
                    <div className="footer-left">
                        {/* Company Motto */}
                        <p className="company-motto text-white">Your Property Solution At a Glance</p>

                        {/* Contacts */}
                        <p className="contacts text-white">Contact us: propertysaleskenya@gmail.com | Phone: +25472000300412</p>
                    </div>

                    <div className="footer-right d-flex align-items-center">
                        {/* Social Media Links */}
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
        </footer>
    );
}

export default Footer;
