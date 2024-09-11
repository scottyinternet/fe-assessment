import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse space-between" id="navbarSupportedContent">
        <div className="logoContainer">
            <a className="navbar-brand" href="#">
            <img className="logo-main" src={`${process.env.PUBLIC_URL}/images/HCAMainLogoScreenshot.png`} alt="HCA Main Logo"></img>
            </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="nav-items-container">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="bi bi-house-fill med-icon"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My Health Resources</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Specialties</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Locations
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Location A</a>
                    <a className="dropdown-item" href="#">Location B</a>
                    <a className="dropdown-item" href="#">Location C</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Patients & Visitors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Find A Doctor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Manage Your Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">MyHealthONE</a>
                </li>
                    <div className="search-input-container">
                        <i className="bi bi-search search-input-icon"></i>

                        <input className="search-input-with-icon" type="search" placeholder="Search" aria-label="Search">
                    </input>
                    </div>
                </ul>
            </div>

        </div>
        </nav>  
    ) 
}