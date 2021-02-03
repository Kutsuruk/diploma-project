import React from "react";
import classes from './Footer.module.css';

let Footer = (props) => {
    return(
        <div className="main-footer bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col order-first text-left">
                        <h4>Address</h4>
                        <ul className='list-unstyled'>
                            <li>Odessa</li>
                            <li>Kamanina st</li>
                        </ul>
                    </div>
                    <div className="col text-center">
                        <h4>Contacts</h4>
                        <ul className='list-unstyled'>
                            <li>+380 93 777 77 77</li>
                            <li>+380 67 333 33 33</li>
                        </ul>
                    </div>
                    <div className="col order-last text-right">
                        <h4>Social</h4>
                            <div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer