import React from 'react'

export default function Toolbar() {
    return (
        <section className="toolbar">
            <div className="dropdown">
            <button className=" btn dropdown-toggle btn-transparent" type="button" id="viewAllERWaitTimesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-clock"></i>
                View All ER Wait Times
            </button>
            <ul className="dropdown-menu" aria-labelledby="viewAllERWaitTimesDropdown">
                <li><a className="dropdown-item" href="#">Location A: 35min</a></li> 
            </ul>


            </div>
            <div className="button-container">

                <button type="button" class="btn btn-primary button">
                    <i class="bi bi-calendar4-week"></i>
                    Make An Appointment
                </button>

                <button type="button" class="btn btn-light toolbar-button">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                    Alerts
                    <i class="bi bi-2-circle-fill"></i>
                </button>
            </div>

        </section>
    ) 
}