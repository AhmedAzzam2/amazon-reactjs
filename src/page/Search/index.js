import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './search.scss'

import data from "../../api/data";
import { ThemeContext } from "../../App";

export default () => {
    const { name } = useParams();
    const theme = useContext(ThemeContext);
    console.log(name);
    let d = data.filter((item) => item.name.startsWith(name)).splice(0, 10);

    const buy = (name) => {
        let dx = data.find((item) => item.name == name);
        let aq = theme.cart.find((item) => item.name == name);
        if (aq) {
            aq.quantity = aq.quantity + 1
        } else {
            theme.setCart(
                [{ ...dx, quantity: 1 }, ...theme.cart]
            )
        }
        console.log(theme);
    }

    console.log(theme);
    return (
        <>
            <Header />
            <div className="search">
                {useParams.ID}
                <div className="nav">
                    <a href="">{name}</a>
                </div>
                <div className="content">
                    {
                        d.map((item) => {
                            return (
                                <div className="card" key={item.name}>
                                    <Link to={'/product/' + item.name}>
                                        <img src={item.image} />
                                        <p>{item.name}</p>
                                    </Link>
                                    <p className="price">EGP <span>{item.price}</span></p>
                                    <p>Get it as soon as tomorrow</p>
                                    <p>FREE Shipping by Amazon</p>
                                    <button onClick={(e) => buy(item.name)}>Buy Now</button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}