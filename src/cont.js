import React from "react";
import Bedio from './video/screen-recordingss.mp4'
import './App.scss';

export default function Con() {
    return(
        <>
            <div className="display">
                <div className="display-content">
                    <div className="display-text">
                        <h2>Design your tables in minutes</h2>
                        <label htmlFor="">Quickly set up real database tables like a spreadsheet and integrate them with popular no-code tools like Make (Integromat), Zapier, and Webflow</label>
                    </div>
                    <div className="display-img">
                        <video muted loop>
                            <source src={Bedio} type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}