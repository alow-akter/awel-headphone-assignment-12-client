import React from 'react';

const HeadphoneInfo = () => {
    return (
        <section>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-[#FFF1EF]">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://sea.audio-technica.com/image/catalog/March%202021/AT9933USB-PACK.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2 bg-[#FB836B] p-4">
                            <p rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">WIRELESS FREEDOM, GREAT
                                SOUND IN SILENCE</p>
                            <p className="text-xs dark:text-gray-400">By
                                <p rel="noopener noreferrer" className="text-xs hover:underline">Leroy Jenkins</p>
                            </p>
                            <div className="dark:text-gray-100">
                                <p>Insert the actual text content here...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">AWEI HEADPHONES</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Smarter Than Your
                            Average Headphones</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <p>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://dtboom.wpenginepowered.com/wp-content/uploads/2020/11/shop-14.jpg" />
                            </p>
                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Bluetooth Earphone</h3>
                                <h3 className="flex-1 py-2 text-xs font-semibold leading-snug">There are many variations of lorem ipsum available, but the have suffered alteration in some form by humour.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Price : $20</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <p>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://dtboom.wpenginepowered.com/wp-content/uploads/2020/11/shop-11.jpg" />
                            </p>
                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Closed-back Headphones</h3>
                                <h3 className="flex-1 py-2 text-xs font-semibold leading-snug">There are many variations of lorem ipsum available, but the have suffered alteration in some form by humour.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Price : $30</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <p>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://dtboom.wpenginepowered.com/wp-content/uploads/2020/12/shop-4.jpg" />
                            </p>
                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Over-The-Ear Earbud</h3>
                                <h3 className="flex-1 py-2 text-xs font-semibold leading-snug">There are many variations of lorem ipsum available, but the have suffered alteration in some form by humour.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Price : $40</span>
                                    <span>2.5K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <p>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://dtboom.wpenginepowered.com/wp-content/uploads/2020/11/shop-14.jpg" />
                            </p>
                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Bluetooth Earphone</h3>
                                <h3 className="flex-1 py-2 text-xs font-semibold leading-snug">There are many variations of lorem ipsum available, but the have suffered alteration in some form by humour.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Price : $20</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default HeadphoneInfo;