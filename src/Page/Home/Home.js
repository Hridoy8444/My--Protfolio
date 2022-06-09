import React from 'react';
import './Home.css';
import myPic from '../../Images/My-pic/My-pic.png';
import p1 from '../../Images/projects/ss-1.png';
import p2 from '../../Images/projects/ss-2.png';
import p3 from '../../Images/projects/ss-3.png';
import p4 from '../../Images/projects/ss-4.png';
import p5 from '../../Images/projects/su-1.png';
import p6 from '../../Images/projects/su-2.png';
import p7 from '../../Images/projects/sp-1.png';
import p8 from '../../Images/projects/sp-2.png';

const Home = () => {
    return (
        <div className=''>
            <div className='flex flex-row bg-img mb-8 banner-container'>
                <div className='ml-32 mt-32 text-white banner-text'>
                    <p className='text-lg'>Hello, I am</p>
                    <h1 className='text-7xl font-bold'>Fardous Hossain</h1>
                    <p className='text-lg mb-4'>A Young MERN stack Web Developer, Front-end Web Developer </p>
                    <a href="https://drive.google.com/u/0/uc?id=1C1zPekQSubWO2rgK66K6DDrsis51FAaa&export=download" target="_blank"><button class="btn btn-secondary">Download Resume</button></a>
                </div>
                <div>
                    <img className='my-img' src={myPic} alt="" />
                </div>
            </div>
            <div >
                <h1 className='text-4xl font-bold text-center mb-8'>Project</h1>
                <div >
                    <div className='flex flex-row  m-4 p-4 w-auto project-size project-container'>
                        <div class="carousel carousel-size rounded-lg carousel-container">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={p1} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={p2} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src={p3} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full">
                                <img src={p4} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='ml-2 text-size text-container'>
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
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row  m-4 p-4 project-size ml-64 project-container'>
                        <div class="carousel carousel-size rounded-lg middle-container">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={p5} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={p6} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                           
                        </div>
                        <div>
                            <div className='ml-2 text-size'>
                                <h2 className='text-2xl font-bold '>Unload Warehouse</h2>
                                <h2 className='text-xl'>Feature</h2>
                                <ul className='list-disc ml-4'>
                                    <li>
                                        This is basically a warehouse management
                                        website. This is a MERN stack website. It is
                                        basically made to be used by an admin or
                                        owner.
                                    </li>
                                    <li>
                                        A complete war house can be maintained
                                        through this website. New products can be
                                        added here. Product quantity can be
                                        controlled
                                    </li>
                                    <li>
                                        If a product is delivered, this set will reduce
                                        the quantity to show the new quantity.
                                        User-added products can be viewed and a
                                        project can be deleted from there.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row  m-4 p-4 project-size project-container'>
                        <div class="carousel carousel-size rounded-lg carousel-container">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={p7} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={p8} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='ml-2 text-size text-container'>
                                <h2 className='text-2xl font-bold '>Smile Sharp</h2>
                                <h2 className='text-xl'>Feature</h2>
                                <ul className='list-disc m-4'>
                                    <li>
                                        This is basically a front end web site where
                                        the user can find out about the services of a
                                        photographer
                                    </li>
                                    <li>
                                        Here the photographer may mention his
                                        service. The user can book the
                                        photographer by choosing the service of his
                                        choice from different services.
                                    </li>
                                    <li>
                                        Google Firebase has been used for
                                        authentication in a very good way here
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;