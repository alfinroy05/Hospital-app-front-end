import React from 'react'
import NavHospital from './NavHospital'

const Index = () => {
    return (
        <div>
            <NavHospital/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.cerner.com/ae/-/media/cerner-media-middle-east/blog-images/thirty-years-of-cerner_11.jpg?vs=1" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://c8.alamy.com/comp/P7T9E7/doctor-hospital-medical-care-service-overlay-mix-with-graphics-illustration-icon-for-healthcare-background-wallpaper-P7T9E7.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.newsclick.in/sites/default/files/2017-12/Hospitals_0.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index