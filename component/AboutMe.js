import React from 'react';

function AboutMe() {
    return (
        <div id="aboutMe"
            className="container-fluid fullHeight bg-custom ">
            <h1 className="mx-auto text-white text-center revealHeader" >About Me</h1>
            <div className="">
                <div className="card mt-5 mb-3 bg-custom mx-auto border-0 opcFalse" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-7 text-white bg-customLight">
                            <div className="card-body">
                                <h5 className="card-title">Self-Intro</h5>
                                <p className="card-text">
                                    I'm a front-end web developer with passion on learning coding to solve problems or achieve target. 
                                    It is always enjoyable for me to explore new techniques.
                                </p>
                                <h5 className="card-title">Education</h5>
                                <p className="card-text">
                                    Bachelor of Science in Surveying
                                    <br></br>
                                    <small>(HK POLYU 2015-2019)</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5 align-middle d-flex">
                            <img src={'assest/programmer.jpg'}className="card-img d-none d-md-block" alt="..."></img>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" skills opcFalse">
                        <h2 className=" text-white text-center mt-5">Skills:</h2>
                        {/*carousel*/}
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="false"
                            style={{ height: "200px" }}>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="text-center">
                                        <img src={'assest/skillIcon/JavaScript.png'} className="skillIcon d-inline-block" alt=""></img>
                                        <img src={'assest/skillIcon/React.png'} className="skillIcon d-inline-block" alt=""></img>
                                        <img src={'assest/skillIcon/Bootstrap.png'} className="skillIcon d-inline-block" alt=""></img>
                                        <img src={'assest/skillIcon/Sass.png'} className="skillIcon d-inline-block" alt=""></img>
                                    </div>
                                    <div className="text-center text-white d-md-block">
                                        <h5>FrontEnd</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-center">
                                        <img src={'assest/skillIcon/Express.png'} className="skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/NodeJS.png'} className="skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/MongoDB.png'} className="skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/MySQL.png'} className="skillIcon" alt=""></img>
                                    </div>
                                    <div className="text-center text-white d-md-block">
                                        <h5>Backend</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-center">
                                        <img src={'assest/skillIcon/Git.png'} className=" skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/GitHub.png'} className="skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/Heroku.png'} className="skillIcon" alt=""></img>
                                        <img src={'assest/skillIcon/Photoshop.png'} className="skillIcon" alt=""></img>
                                    </div>
                                    <div className="text-center text-white d-md-block">
                                        <h5>{`Tools & others`}</h5>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default AboutMe;