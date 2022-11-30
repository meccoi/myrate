import React from "react";
// import Bedio from './video/screen-recordingss.mp4'
import './App.scss';

import imgaa from './image/Screenshot 2022-11-29 191752.png';
import imgaaa from './image/noname.png';
import imgaaaa from './image/Screenshot 2022-11-29 190124.png';
import imgaaaaa from './image/Screenshot 2022-11-29 191041.png';

export default function Specs () {
    return(
        <>
            <div className="pcspecs">
                <div className="pcspecs-content">
                    <div className="pcspecs-text">
                        <h2>Designed for everyone</h2>
                    </div>
                    <div className="pcspecs-column">
                        <div className="specs a">

                            <img src={imgaa} alt="" />
                                <div className="specs x">
       
                                    <img src={imgaaaa} alt="" />
                                </div>
                        </div>
                        <div className="specs b">

                            <img src={imgaaa} alt="" />
                        </div>
                        <div className="specs c">

                            <img src={imgaaaaa} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}