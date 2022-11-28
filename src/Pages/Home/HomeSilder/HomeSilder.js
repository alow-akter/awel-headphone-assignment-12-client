import React from 'react';

const HomeSilder = () => {
    return (
        <section className='mt-6'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R55050mmdrivers_f993a2c2-483d-40f3-b2b0-460602543c5a_1300x.jpg?v=1667828684" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px]">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Banner_2.png?v=1653120525&width=2000" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://m.media-amazon.com/images/I/71QDnQWrVNL._SX679_.jpg" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-beige_3000x.jpg?v=1655377593" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSilder;