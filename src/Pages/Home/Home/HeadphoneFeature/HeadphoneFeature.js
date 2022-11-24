import React from 'react';

const HeadphoneFeature = () => {
    return (
        <section>
            <article className="dark:bg-gray-800 dark:text-gray-100 bg-[#F4F4F4]">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <p className='text-xl font-semibold'>EXPLORE FUNCTIONALITY</p>
                        <h2 className='text-4xl font-bold text-[#FB836B]'>Main Features</h2>
                        <hr />
                        <div className="flex space-x-2 sm:space-x-4">
                            <img className='w-[40px] ' src="https://img.icons8.com/ios-glyphs/512/full-battery.png" alt="" />
                            <div className="space-y-2">
                                <h2 className="text-2xl text-[#DF585D]  font-medium leading-snug">Up To 30 Hours Of Battery Life</h2>
                                <p className="leading-snug">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <img className='w-[40px] ' src="https://img.icons8.com/ios-filled/512/high-volume.png" alt="" />
                            <div className="space-y-2">
                                <h2 className="text-2xl text-[#DF585D] font-medium leading-snug">
                                    HD Noise Cancelling Processor</h2>
                                <p className="leading-snug">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <img className='w-[40px] ' src="https://img.icons8.com/ios-filled/512/apple-music.png" alt="" />
                            <div className="space-y-2">
                                <h2 className="text-2xl text-[#DF585D] font-medium leading-snug">
                                    Control Everything you Like</h2>
                                <p className="leading-snug">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800 mt-28">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://v-tac.eu/images/virtuemart/product/7727-W.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96 "
                            />
                        </div>
                    </div>
                </div>
            </article>
            <article className='mt-10'>
                <h1 className='text-4xl text-center text-[#FA826B]'>Our Expensive Products </h1>
                <div className="relative w-full flex gap-4 py-6 overflow-x-auto">

                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/1more-true-wireless-bluetooth-earbuds-aptx-best-online-india-black_530x.png?v=1592330213" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $22</p>
                    </div>

                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/1more-true-wireless-bluetooth-earbuds-aptx-best-online-india-gold_530x.png?v=1592330219" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $23</p>
                    </div>

                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/1more-true-wireless-bluetooth-earbuds-aptx-best-online-india-green_530x.png?v=1592330224" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $26</p>

                    </div>

                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/p3_530x.png?v=1601528880" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $30</p>
                    </div>
                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/p2_530x.png?v=1601528879" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $32</p>
                    </div>
                    <div>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://cdn.shopify.com/s/files/1/1644/5237/products/p1_530x.png?v=1601528878" alt="" />
                        <h4>OneMore headphones</h4>
                        <p>price: $36</p>
                    </div>

                </div>
            </article>
        </section>
    );

};

export default HeadphoneFeature;
