import "./audition.css";
import * as React from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import auditionAnimate from '../../../assets/audition/js';
import { useEffect } from "react";
import FutureDesc from '../FutureDesc/index';
import CourseList from '../CourseList/index'


const Audition = () => {
    useEffect(() => {
        console.log(TWEEN);
        auditionAnimate(THREE, TWEEN);
    })

    return (
        <div className="components-Audition">
            <div id="container"></div>
            <FutureDesc></FutureDesc>
           <CourseList></CourseList>
        </div>
    );
};
export default Audition;
