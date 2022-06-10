import React from 'react';
import su1 from '../../Images/Picture/su-1.png';
import su2 from '../../Images/Picture/su-2.png';

const Unload = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-8'>Unload Warehouse</h2>
            <div>
                <div class="carousel w-2/4 ml-64 rounded-md mt-4 slider-container">
                    <div id="item1" class="carousel-item w-full">
                        <img src={su1} class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={su2} class="w-full" />
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
            <div className='ml-2 text-size text-container detail-container'>
                <h2 className='text-2xl font-bold '>Unload Warehouse</h2>
                <h2 className='text-xl'>Feature</h2>
                <ul className='list-disc ml-4'>
                    <li>
                        This is basically a warehouse management
                        website. This is a MERN stack website. It is
                        basically made to be used by an admin or
                        owner
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
                <a href="https://unload-warehouse.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                <a href="https://github.com/Hridoy8444/Unload-Warehouse" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Github Client</button></a>
                <a href="https://github.com/Hridoy8444/Unload-Warehouse-server-site" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Github Server</button></a>
            </div>
        </div>
    );
};

export default Unload;