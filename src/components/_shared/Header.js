import React from 'react'

export default function Header() {
    return (

<nav class="navbar navbar-expand-lg sticky-top">
    <div class="collapse navbar-collapse space-between header" id="navbarSupportedContent">

  <a class="navbar-brand" href="#">
  <img width="300" src="./images/HCAMainLogoScreenshot.png" alt="HCA Main Logo"></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-house-fill"></i>
            </a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Health Resources</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Specialties</a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Locations
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Location A</a>
          <a class="dropdown-item" href="#">Location B</a>
          <a class="dropdown-item" href="#">Location C</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Patients & Visitors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Careers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find A Doctor</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Manage Your Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MyHealthONE</a>
      </li>
      <li>
        <div class="input-container">
            <i class="bi bi-search input-icon"></i>

            <input class="input-with-icon" type="search" placeholder="Search" aria-label="Search">
        </input>
        </div>
      </li>
    </ul>

  </div>
</nav>
    )

    // return (
    //     <div className="border fixed header">
    //         <p> LOGO IMAGE</p>
    //         <nav>
    //             <ul class="nav-ul">
    //                 <li>  
    //                     <a href="#"><i class="bi bi-house-fill"></i></a>
    //                 </li>
    //                 <li>
    //                     <a href="#">My Health Resources</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Specialties</a>
    //                 </li>
    //                 <li>
    //                     <button>Locations</button>>
    //                 </li>
    //                 <li>
    //                     <a href="#">Patients & Visitors</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Careers</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">About Us</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Find A Doctor</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Manage Your Account</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">MyHealthONE</a>
    //                 </li>
    //                 <li>
    //                     <button>...</button>
    //                 </li>
    //                 <li>
    //                     <input type="text" placeholder="Search..." aria-label="Search" />
    //                 </li>
    //             </ul>

    //         </nav>

    //     </div>
    // ) 
}