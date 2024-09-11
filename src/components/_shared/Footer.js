import React from 'react'

export default function Footer() {
    return (
        <footer className="border fixed footer">
            <div class="footer-inner-container">
                <div class="footer-left-container">
                    <span>
                    <p className="copyright">Copyright 1991-2021 <a href='#' className="footer-link-b">C-HCA,Inc</a>; All rights reserved.</p>
                    </span>
                </div>
                <div class="footer-right-container">
                    <div class="link-span">
                        <a className="footer-link-b" href='#'>Notice of Privacy Practices</a> | 
                        <a className="footer-link-b"href='#'>Terms & Conditions</a> | 
                        <a className="footer-link-b"href='#'>Notice at Collection</a> | 
                        <a className="footer-link-b"href='#'>Privacy Policy</a> | 
                        <a className="footer-link-b"href='#'>Do Not Sell My Personal Information</a>
                    </div>
                    <div class="link-span">
                        <a className="footer-link-b" href='#'>Social Media Policy</a> | 
                        <a className="footer-link-b"href='#'>Acceptable Use Policy</a> | 
                        <a className="footer-link-b"href='#'>HCA Nondiscrimination Notice</a> | 
                        <a className="footer-link-b"href='#'>Accessibility</a> | 
                        <a className="footer-link-b"href='#'>Responsible Disclosure</a>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}