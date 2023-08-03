import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
            {/* Company Motto */}
            <p className="company-motto">Your Property Solution At a Glance </p>

            {/* Contacts */}
            <p className="contacts">Contact us: propertysaleskenya@gmail.com | Phone: +25472000300412</p>
            </div>

            <div className="footer-right">
            {/* Social Media Links */}
            <a
                href="https://www.facebook.com/yourfacebookpage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                Facebook
            </a>
            <a
                href="https://twitter.com/yourtwitterpage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                Twitter
            </a>
            <a
                href="https://www.instagram.com/yourinstagrampage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                Instagram
            </a>
            <a
                href="https://www.linkedin.com/company/yourlinkedinpage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                LinkedIn
            </a>
            <a
                href="https://www.tiktok.com/@yourtiktokpage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                TikTok
            </a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
