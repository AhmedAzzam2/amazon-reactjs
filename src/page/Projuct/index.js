import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Star, StarFill, CashCoin, Award } from 'react-bootstrap-icons';
import iconSecure from '../../asset/icon-secure.png';
import iconCod from '../../asset/icon-cod.png';
import iconAm from '../../asset/icon-amazon-delivered.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './projuct.scss'

import data from "../../api/data";

export default () => {
    const { name } = useParams();
    console.log(name);
    let d = data.find((item) => item.name == name);
    return (
        <>
            <Header />
            <div className="product-item">
                {useParams.ID}
                <div className="nav">
                    <a href="">aaaaaaa</a>
                </div>
                <div className="content">
                    <div className="left">
                        <img src={d.image} />
                    </div>
                    <div className="center">
                        <h1>{d.name}</h1>
                        <p>Brand: Mienta</p>
                        <div className="ratings"> <StarFill /><StarFill /><StarFill /><StarFill /><Star /> </div>
                        <div className="price">
                            EGP <span>{d.price}</span>
                            <div className="icon-farm-wrapper">
                                <div className="section">
                                    <img src={iconCod} alt="" />
                                    <div>Cash on Delivery</div>
                                </div>
                                <div className="section">
                                    <img src={iconAm} alt="" />
                                    <div>Delivered by Amazon</div>
                                </div>
                                <div className="section">
                                    <img src={iconSecure} alt="" />
                                    <div> Secure transaction </div>
                                </div>

                            </div>
                            <div id="feature-bullets">
                                <hr/>
                                    <p> About this item </p>
                                    <ul>
                                        <li>Brand: Tornado</li>
                                        <li>Color: Black</li>
                                        <li>Power Source: Electric</li>
                                        <li>Number of speeds: 3</li>
                                        <li>Maintenance-free blades: لا</li>
                                        <li>Fan Type: Pedestal Fans</li>
                                        <li>Model Number: TSF-16W</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price">EGP {d.price}</div>
                        <p>free returns</p>
                        <p>free delivery</p>
                        <p>in Stock</p>
                        <div className="qty">
                            <span>Qty</span>
                            <select name="quantity">     <option value="1" selected="">1 </option>       <option value="2">2 </option>       <option value="3">3 </option>       <option value="4">4 </option>       <option value="5">5 </option>       <option value="6">6 </option>       <option value="7">7 </option>       <option value="8">8 </option>       <option value="9">9 </option>       <option value="10">10 </option>       <option value="11">11 </option>       <option value="12">12 </option>       <option value="13">13 </option>       <option value="14">14 </option>       <option value="15">15 </option>       <option value="16">16 </option>       <option value="17">17 </option>       <option value="18">18 </option>       <option value="19">19 </option>       <option value="20">20 </option>       <option value="21">21 </option>       <option value="22">22 </option>       <option value="23">23 </option>       <option value="24">24 </option>       <option value="25">25 </option>       <option value="26">26 </option>       <option value="27">27 </option>       <option value="28">28 </option>       <option value="29">29 </option>       <option value="30">30 </option>          </select>
                        </div>
                        <button>Buy Now</button>
                    </div>
                </div>


                <div className="deals-shoveler-v2">
                    <div className="header">
                        <h2>{d.type}</h2>
                        <a href="#">View All</a>
                    </div>
                    <Swiper
                        spaceBetween={1}
                        navigation={true}
                        modules={[Navigation]}
                        onSlideChange={(z) => console.log(z + 'slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                width: 320,
                                slidesPerView: 2,
                            },
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 4,
                            },
                        }}
                    >

                        {
                            data.filter(
                                (item) => item.type === d.type
                            )// max item 10 return
                                .slice(0, 10)
                                .map((item, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="card">
                                                <div className="gw-card-layout">
                                                    <Link to={'/product/' + item.name}>
                                                        <img src={item.image} />
                                                    </Link>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                        }
                    </Swiper>

                </div>

            </div>
        </>
    )
}