import React from 'react';
import Counters from '../components/Counters';
import Header from '../components/Header';
import Instructions from '../components/Instructions';
import Meditation from '../components/Meditation';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
    return (
        <>
            <section className="bgOverlay">
                <div className="overlay1">
                    <Header />
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="welcome_title">Welcome to Yogabest</h1>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <h1 className="yoga_title">Yoga Enhances<br /> Your Life</h1>
                                <p className="yoga_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                                    <a href="#" className="playBtn">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <Meditation />
            <Instructions />
            <Counters />
        </>
    );
}

export default Home;