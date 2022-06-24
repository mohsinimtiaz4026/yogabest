import React from 'react';
import def from '../assets/images/def.png';

const Instructions = () => {
    return (
        <section className="instructions">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 pt-5 text-center">
                            <div className="instructions_heading">
                                <p>Yogabest</p>
                                <h1>CONTROL YOUR BODY TO FREE YOUR SOUL</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={def} alt="def"
                                className="def_manage" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
                            <div className="right_side">
                                <div className="icon_management">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="inner_container">
                                    <h6>Body & Mind Balance</h6>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="icon_management">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="inner_container">
                                    <h6>Healthy Daily Life</h6>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="icon_management">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="inner_container">
                                    <h6>Improves your flexibility</h6>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Instructions;