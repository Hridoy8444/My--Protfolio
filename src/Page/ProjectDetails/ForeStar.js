import React from 'react';
import './Project.css';
import ss1 from '../../Images/Picture/ss-1.png';
import ss2 from '../../Images/Picture/ss-2.png';
import ss3 from '../../Images/Picture/ss-3.png';
import ss4 from '../../Images/Picture/ss-4.png';


const ForeStar = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-8'>ForeStar Tool and Manufacture</h2>
            <div >
                <div>
                    <div class="carousel w-2/4 ml-64 rounded-md mt-4 slider-container">
                        <div id="item1" class="carousel-item w-full">
                            <img src={ss1} class="w-full" />
                        </div>
                        <div id="item2" class="carousel-item w-full">
                            <img src={ss2} class="w-full" />
                        </div>
                        <div id="item3" class="carousel-item w-full">
                            <img src={ss3} />
                        </div>
                        <div id="item4" class="carousel-item w-full">
                            <img src={ss4} class="w-full" />
                        </div>
                    </div>
                    <div class="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" class="btn btn-xs">1</a>
                        <a href="#item2" class="btn btn-xs">2</a>
                        <a href="#item3" class="btn btn-xs">3</a>
                        <a href="#item4" class="btn btn-xs">4</a>
                    </div>
                </div>
                <div className='ml-2 text-size text-container detail-container mt-8'>
                    <h2 className='text-2xl font-bold '>ForeStar Tool</h2>
                    <h2 className='text-xl'>Feature</h2>
                    <ul className='list-disc ml-4'>
                        <li>
                            This is basically a warehouse management
                            website. This is a MERN stack website. It is
                            basically made to be used by an admin and
                            user.
                        </li>
                        <li>
                            Here the customer can see the price of the
                            product and order it in a certain quantity.
                            Then you can go to the dashboard to see his
                            orders and delete if you want
                        </li>
                        <li>
                            Customers will be able to pay by credit card
                            to place an order. Finally, the customer will
                            be able to tell you how our service is.
                        </li>
                    </ul>
                    <a href="https://forester-tool.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                    <a href="https://github.com/Hridoy8444/forestaer-tools-client" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Github Client</button></a>
                    <a href="https://github.com/Hridoy8444/forester-tools-server" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Github Server</button></a>

                </div>
            </div>
        </div>
    );
};

export default ForeStar;