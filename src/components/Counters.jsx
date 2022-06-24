import React from 'react';

const Counters = () => {
    return (
        <section className="counters">
            <div className="counters_overlay">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-5 pb-5">
                            <div className="counters_div">
                                <div className="icon_div">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="bottom_div">
                                    <h3>150</h3>
                                    <p>YOGA CLASSES</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-5 pb-5">
                            <div className="counters_div">
                                <div className="icon_div">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="bottom_div">
                                    <h3>1,000</h3>
                                    <p>YOGA<br/> CONDUCTED</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-5 pb-5">
                            <div className="counters_div">
                                <div className="icon_div">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="bottom_div">
                                    <h3>65</h3>
                                    <p>YEARS OF<br/> EXPERIENCED</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-5 pb-5">
                            <div className="counters_div">
                                <div className="icon_div">
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                                <div className="bottom_div">
                                    <h3>71,650</h3>
                                    <p>HAPPY<br/> CUSTOMERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counters;