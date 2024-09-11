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
                            <i className="bi bi-behance"></i>
                        </div>
                        <div className="circle-wrapper">
                            <i class="bi bi-facebook"></i>
                        </div>

                        <div className="circle-wrapper">
                            <i class="bi bi-instagram"></i>
                        </div>
                        <div className="circle-wrapper">
                            <i class="bi bi-twitter"></i>
                        </div>



                    </div>
                </div>
            </div>
        </footer>
    ) 
}