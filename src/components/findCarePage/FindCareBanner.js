import React from 'react'

export default function FinderCareBanner() {
    return (
        <section className="banner">
            <div className="inner-banner">
                <div className="left-section">
                    <h1 className="find-care">Find Care</h1>


                    <div class="input-group looking-input-group">
                        <input type="text" class="form-control looking-input" placeholder="What are you looking for?" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary looking-button" type="button" id="button-addon2">
                            <div className="search-icon-container">
                                <p> <i className="bi bi-search search-icon"></i></p>
                                
                            </div>
                        </button>
                    </div>

                </div>
                <div className="right-section">
                    <h3 className="need-help">Need Help? We're here.</h3>
                </div>
            </div>
        </section>
    ) 
}