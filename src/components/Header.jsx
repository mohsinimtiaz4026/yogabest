import React from 'react';

const Header = () => {
  return (
    <header className="topHeader">
        <div className="container">
            <div className="row">
                <div className="col-6 my-auto">
                    <h1>Phone no: 
                        <a href="#">+00 1234 5678</a>
                        <span>or</span>
                        email us: 
                        <a href="mailto:emailsample@email.com">emailsample@email.com</a>
                    </h1>
                </div>
                <div className="col-6 my-auto py-2">
                    <ul>
                        <li>
                            <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>                       
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa-brands fa-instagram"></i>                       
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa-brands fa-twitter"></i>                       
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;