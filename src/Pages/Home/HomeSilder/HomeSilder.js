import React from 'react';

const HomeSilder = () => {
    return (
        <section className='mt-6'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px]">
                    <img src="https://www.jetsetter.com//uploads/sites/7/2018/04/AWsRKMNo-1380x690.jpeg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wh-1000xm3-s-voiceassistant-btlonly-mid-1558611077.jpg?resize=980:*" className="w-full h-[500px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://oldtimemusic.com/wp-content/uploads/2020/06/best-true-wireless-earbuds.jpg" className="w-full h-[500px]" alt='' />
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