import React from 'react';
import sp1 from '../../Images/Picture/sp-1.png';
import sp2 from '../../Images/Picture/sp-2.png';

const SmileSharp = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-8'>Smile Sharp Photography</h2>
            <div>
                <div class="carousel w-2/4 ml-64 rounded-md mt-4 slider-container">
                    <div id="item1" class="carousel-item w-full">
                        <img src={sp1} class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={sp2} class="w-full" />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src="" />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src="" class="w-full" />
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>
            </div>
            <div>
                <div className='ml-2 text-size text-container detail-container'>
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
                    <a href="https://simle-sharp-photography.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                    <a href="https://github.com/Hridoy8444/smile-sharp" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Github</button></a>

                </div>
            </div>
        </div>
    );
};

export default SmileSharp;