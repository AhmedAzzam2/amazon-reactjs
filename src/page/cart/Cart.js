import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './cart.scss'

import data from "../../api/data";
import { ThemeContext } from "../../App";

export default () => {
    const { name } = useParams();
    const theme = useContext(ThemeContext);
    console.log(name);
    let d = data.filter((item) => item.name.startsWith(name)).splice(0, 10);

    const remove = (name) => {
        theme.setCart(
            theme.cart.filter((item) => item.name != name)
        )
        console.log(theme);
    }

    let totas = theme.cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    let quantity = (e, name) => {
        let dx = theme.cart.find((item) => item.name == name);
        theme.setCart(
            [{ ...dx, quantity: e.target.value }, ...theme.cart.filter((item) => item.name != name)]
        )
    }

    return (
        <>
            <Header />
            <div className="cartProduct">
                <div className="left">

                    {useParams.ID}
                    <div className="content">
                        <div className="body">
                            <div className="nav">
                                <h1>Shopping Cart</h1>
                                <p style={{ textAlign: 'end', margin: 0 }}>price</p>
                                <hr />
                            </div>
                            <div className="cards">
                                {
                                    theme.cart.map((item) => {
                                        return (
                                            <div className="card" key={item.name}>
                                                <Link to={'/product/' + item.name}>
                                                    <img src={item.image} />
                                                </Link>
                                                <div className="group">
                                                    <p>{item.name}</p>
                                                    <p>Get it as soon as tomorrow</p>
                                                    <p>{item.quantity}</p>
                                                    <div className="group-remove-quantity">
                                                        <div className="qty">
                                                            <label htmlFor={item.name}>Qty</label>
                                                            <select name="quantity" id={item.name} onChange={(e) => quantity(e, item.name)} defaultValue={item.quantity}>     <option value="1" >1 </option>       <option value="2">2 </option>       <option value="3">3 </option>       <option value="4">4 </option>       <option value="5">5 </option>       <option value="6">6 </option>       <option value="7">7 </option>       <option value="8">8 </option>       <option value="9">9 </option>       <option value="10">10 </option>       <option value="11">11 </option>       <option value="12">12 </option>       <option value="13">13 </option>       <option value="14">14 </option>       <option value="15">15 </option>       <option value="16">16 </option>       <option value="17">17 </option>       <option value="18">18 </option>       <option value="19">19 </option>       <option value="20">20 </option>       <option value="21">21 </option>       <option value="22">22 </option>       <option value="23">23 </option>       <option value="24">24 </option>       <option value="25">25 </option>       <option value="26">26 </option>       <option value="27">27 </option>       <option value="28">28 </option>       <option value="29">29 </option>       <option value="30">30 </option>          </select>
                                                        </div>
                                                        <button onClick={(e) => remove(item.name)}>Remove</button>
                                                    </div>
                                                </div>
                                                <p className="price">EGP <span>{item.price}</span></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="sc-buy-box">
                            <div className="text">Subtotal ({theme.cart.length} item): <span>EGP {totas}</span></div>
                            <button>Proceed to Buy</button>
                        </div>
                    </div>

                </div>
                <div className="right">
                </div>
            </div>
        </>
    )
}