import React from "react";
import classes from './Carousel.module.css'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let Carrousel = (props) => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://codehabitude.com/storage/2021/01/car-rental-business.jpg"
                    alt="Cars image info"
                />
                <Carousel.Caption>
                    <h3>Excellent cars</h3>
                    <p>You can choose one of four type cars.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.motoringresearch.com/wp-content/uploads/2019/06/S19_2626_fine.jpg"
                    alt="Website image info"
                />

                <Carousel.Caption>
                    <h3>Great looking website</h3>
                    <p>Our site is responsive and easy in using.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.enterprise.ca/content/dam/ent-brand/replacement-rental-launchpad-review.jpg.wrend.480.270.jpeg"
                    alt="Personal image info"
                />

                <Carousel.Caption>
                    <h3>Professional personal</h3>
                    <p>Our personal can help you with choose of car and any problem.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrousel