import React from "react";
import classes from './Footer.module.css'

let Footer = (props) => {
    return(
        <div className="fixed-bottom main-footer bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4 className='dark'>Contact us</h4>
                        <ul className='list-unstyled'>
                            <li>Vinnytsia</li>
                            <li>1-st Kyivskiy lane</li>
                            <li>+(380)639-439-831</li>
                            <li><a href="https://github.com/Kutsuruk" target='_blank'>GitHub</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4">
                        <p className='dark'>All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer