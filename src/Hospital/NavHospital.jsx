import React from 'react'

const NavHospital = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <nav class="navbar navbar-expand-lg bg-primary">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="/">HOSPITAL</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <a class="nav-link active" aria-current="page" href="/add">ADD PATIENT</a>
                                                <a class="nav-link" href="/search">SEARCH PATIENT</a>
                                                <a class="nav-link" href="/delete">DELETE PATIENT</a>
                                                <a class="nav-link" href="/view">VIEW ALL</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHospital
