import Header from "../../component/Header";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import data from "../../api/data";
import './Home.scss';
export default function Home() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
    }, [count]);
    return (
        <div>
            <Header />
            <div className="home">
                <div className="swipe">
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://m.media-amazon.com/images/I/618j+vKDW4L._SX3000_.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61ghVcDjqML._SX3000_.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="https://m.media-amazon.com/images/I/81kVoZWJcoL._SX3000_.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="gw-layout">
                    <div className="deals-shoveler-v1">
                        <div className="gw-card-layout">
                            <h2>Today's Deals</h2>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/BAU/XCM_Manual_1456437_4913325_379x304_1X._SY304_CB629787412_.jpg" />
                            <a href="#">Shop Now</a>
                        </div>
                        <div className="gw-card-layout">
                            <h2>Laptops | Up to 25% off</h2>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/BAU/XCM_Manual_1456437_4913300_379x304_1X._SY304_CB629787412_.jpg" />
                            <a href="#">Shop Now</a>
                        </div>
                        <div className="gw-card-layout">
                            <h2>Smartphones | Up to 25% off</h2>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/BAU/XCM_Manual_1456437_4913325_379x304_1X._SY304_CB629787412_.jpg" />
                            <a href="#">Shop Now</a>
                        </div>
                        <div className="gw-card-layout">
                            <h2>free games with Amazon Prime</h2>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/prime/damisi/prime_eg_launch_/xcm_banners_primegaming_desktop_categorycard_379x304_758x608_eg-en._SY304_CB622128285_.jpg" />
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                    <div className="deals-shoveler-v2">
                        <div className="header">
                            <h2>Today's Deals</h2>
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
                                    (item) => item.price < 319.20 && item.price > 0
                                )// max item 10 return
                                    .slice(0, 10)
                                    .map((item, index) => {
                                        return (
                                            <SwiperSlide>
                                                <div className="card">
                                                    <div className="gw-card-layout">
                                                        <img src={item.image} />
                                                    </div>
                                                    <a href="#"> <span class="a-size-mini"> EGP {item.price} and under</span>  Top deal</a>

                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                            }
                        </Swiper>

                    </div>

                    <div className="deals-shoveler-v2">
                        <div className="header">
                            <h2>Amazon Devices</h2>
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
                                    (item) => item.type === 'Amazon Devices'
                                )// max item 10 return
                                    .slice(0, 10)
                                    .map((item, index) => {
                                        return (
                                            <SwiperSlide>
                                                <div className="card">
                                                    <div className="gw-card-layout">
                                                        <img src={item.image} />
                                                    </div>

                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                            }
                        </Swiper>

                    </div>

<div className="deals-shoveler-v2">
    <div className="header">
        <h2>Amazon Fashion</h2>
        <a href="#">View All</a>
    </div>
    <Swiper
        spaceBetween={1} 
        navigation={true}
        modules={[Navigation]}
        onSlideChange={(z) => console.log(z + 'Baby')}
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
                (item) => item.type === 'Amazon Fashion'
            )// max item 10 return
                .slice(0, 10)
                .map((item, index) => {
                    return (
                        <SwiperSlide>
                            <div className="card">
                                <div className="gw-card-layout">
                                    <img src={item.image} />
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                })
        }
    </Swiper>

</div>

                </div>
            </div>
        </div>
    );
}