import "./audition.css";
import * as React from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import auditionAnimate from '../../../assets/audition/js';
import { useEffect } from "react";


const Audition = () => {

    useEffect(() => {
        console.log(TWEEN);
        auditionAnimate(THREE, TWEEN);
    })

    return (
        <div className="components-Audition">
            <div id="container"></div>
        </div>
    );
};
export default Audition;
