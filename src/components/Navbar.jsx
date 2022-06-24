import React from 'react';

const Navbar = () => {
    return (
        <div className="designNav">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Yogabest</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trainer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                >Classes</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                >Schedule</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                >Blog</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                >Contact</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;