import React from "react";
import './App.scss';

import product from './image/Screenshot 2022-11-29 214957.png';
import variation from './image/Screenshot 2022-11-29 214102.png';
import full from './image/Screenshot 2022-11-29 214132.png';
import shop from './image/Screen Shot 2022-11-29 at 21.46.18.png';
import shopee from './image/shopee.png';

export default function Shopee() {
    return(
        <>
            <div className="shopee">
                <div className="shopee-content">
                    <div className="shopee-logo">
                        <img src={shopee} alt="" />
                    </div>
                    <div className="shopee-img">
                        <div className="shopee-img-item">
                            <img src={product} alt="" />
                        </div>
                        <div className="shopee-img-item">
                            <img src={variation} alt="" />
                        </div>
                        <div className="shopee-img-item">
                            <img src={full} alt="" />
                        </div>
                    </div>
                    <div className="shopee-shop">
                       <a href="https://shopee.ph/Toshiba-Fujitsu-Original-Intel-Core-i5-Laptop-4GB-8GB-16GB-Memory-128G-256G-512G-SSD.-i.780290062.21327704634?sp_atk=82184b69-10b5-451e-bd25-eed51486aae0&xptdk=82184b69-10b5-451e-bd25-eed51486aae0"> <img src={shop} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}