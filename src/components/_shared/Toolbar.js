import React from 'react'
import './toolbar.css'

export default function Toolbar() {
    return (
        <section className="toolbar space-between">
            <div className="dropdown">
            <button className=" btn dropdown-toggle btn-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-clock"></i>
                View All ER Wait Times
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Location A: 35min</a></li> 
                <li><a className="dropdown-item" href="#">Location A: 35min</a></li>    
            </ul>

            </div>
            <div className="button-container">

                <button type="button" class="btn btn-primary button">
                    <i class="bi bi-calendar4-week"></i>
                    Make An Appointment
                </button>

                <button type="button" class="btn btn-light toolbar-button">
                    <div class="inner-button">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    <p>Alerts</p>
                    <i class="bi bi-2-circle-fill"></i>
                    </div>
                </button>
            </div>

        </section>
    ) 
}