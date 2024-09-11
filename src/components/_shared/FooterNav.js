import React from 'react'

export default function FooterNav() {
    return (
        <footer className="fixed footer-nav">
            <div className="inner-footer-nav">
                <div className="inner-footer-nav-left-container">
                    <img className="logo-footer" src={`${process.env.PUBLIC_URL}/images/HCAFooterLogoScreenshot.png`} alt="HCA Main Logo"></img>
                    <div className="address-container">
                        <p>HCA Houston Healthcare</p>
                        <p>3737 Buffalo Speedway</p>
                        <p>Suite 1400</p>
                        <p>Houston, TX 77098</p>
                    </div>
                </div>
                <div className="inner-footer-nav-center-container">
                    <h6 className="footer-title">About Us</h6>
                        <a href='#' className = "footer-link">About HCA Houston</a>
                        <a href='#' className = "footer-link">Phone Directory</a>
                        <a href='#' className = "footer-link">Maps & Directions</a>
                        <a href='#' className = "footer-link" >Media Center</a>
                        <a href='#' className = "footer-link">Contact Us</a>
                </div>
                <div className="inner-footer-nav-right-container">
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="socials-container">
                        <div className="circle-wrapper">
                            <button className="social-button" aria-label="Behance">
                                <i className="bi bi-behance"></i>
                            </button>
                        </div>
                        <div className="circle-wrapper">
                            <button className="social-button" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </button>
                        </div>
                        <div className="circle-wrapper">
                            <button className="social-button" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </button>
                        </div>
                        <div className="circle-wrapper">
                            <button className="social-button" aria-label="Twitter">
                                <i className="bi bi-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}