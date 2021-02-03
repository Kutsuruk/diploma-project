import React from "react";
import classes from './Information.module.css'
import {Col, Container, Row} from "react-bootstrap";

let Information = (props) => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="https://cdn.mattaki.com/toyota/page-builder/content-pieces/25038004-0b57-41ea-9950-39e76c32d2d2/image3.png"
                             alt="Information image"/>
                    </div>
                    <div className="col text-justify">
                        <p className='h1'>We are trying to make your trips not only comfortable but also safe.</p>
                    </div>
                </div>
                <br/>
                <div className="row text-center">
                    <div className="col">
                        <h4 className='display-3'>Safety</h4>
                        <p className='h5 text-muted'>You can not be afraid for safety, we also monitor the quality of
                            seat belts and airbags. For your child, we design child seats for greater safety.
                        </p>
                    </div>
                    <div className="col">
                        <h4 className='display-3'>Cleaning</h4>
                        <p className='h5 text-muted'>Our cleaning company carries out cleaning of cars
                            after each client
                        </p>
                    </div>
                    <div className="col">
                        <h4 className='display-3'>Serviceability</h4>
                        <p className='h5 text-muted'>Our machines are checked every 10,000 kilometers by an authorized
                            dealer using new technologies.
                        </p>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Information