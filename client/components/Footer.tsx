import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light text-center w-100 py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Sports Global is dedicated to promoting sportmanship & competitive excellent worldwide.</p>
                    </div>

            <div className="col-md-4">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li><i className="fas fa-map-marker-alt me-2"></i>126 Lane, Dallas, TX 75201</li>
                    <li><i className="fas fa-phone me-2"></i>(123) 456-7890</li>
                    <li><i className="fas fa-envelope me-2"></i>Sports.Global@yahoo.com</li>
                </ul>
            </div>

            <div className="col-md-4">
                <h5>Follow us on:</h5>
                <a href="#" className="text-light d-block mb-2"><i className="fab fa-facebook me-2"></i>Sports Global</a> 
                <a href="#" className="text-light d-block mb-2"><i className="fab fa-twitter me-2"></i>Sports_Global</a> 
                <a href="#" className="text-light d-block mb-2"><i className="fab fa-instagram me-2"></i>Sports_Global.3</a>
                <a href="#" className="text-light d-block mb-2"><i className="fab fa-linkedin me-2"></i>Sports Global</a>
            </div>
        </div>

            <div className="col-md-4">
                <div className="col text-center mt-4">
                    <p className="mb-0 text-center">&copy; {new Date().getFullYear()} Sports Global. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;