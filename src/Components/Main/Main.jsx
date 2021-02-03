import React from "react";
import classes from './Main.module.css'
import Carrousel from "../Main/Carousel/Carousel";
import Inforamtion from "./Information/Inforamtion";

let Main = (props) => {
    return(
        <div>
            <Carrousel />
            <br/>
            <Inforamtion />
        </div>
    )
}

export default Main