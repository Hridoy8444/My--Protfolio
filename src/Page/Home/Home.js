import React from 'react';
import './Home.css';
import myPic from '../../Images/My-pic/My-pic.png';
import p1 from '../../Images/projectt-detail/d-4.png';
import p2 from '../../Images/projectt-detail/d-5.png';
import p3 from '../../Images/projectt-detail/d-6.png';
import { Link } from 'react-router-dom';
import Contract from '../Contract/Contract';


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
                        <div>
                            <img className='carousel-container carousel-size' src={p1} alt="" />
                        </div>
                        <div>
                            <div className='ml-2 text-size text-container'>
                                <h2 className='text-2xl font-bold '>ForeStar Tool</h2>
                               
                                <a href="https://forester-tool.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                                <Link to={'/forestar'}><button class="btn btn-secondary m-4 pl-16 pr-16">Detail</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row  m-4 p-4 project-size ml-64 project-container middle-project-container'>
                        <div>
                            <img className='carousel-container carousel-size' src={p2} alt="" />
                        </div>
                        <div>
                            <div className='ml-2 text-size text-container'>
                                <h2 className='text-2xl font-bold '>Unload Warehouse</h2>
                               
                                <a href="https://unload-warehouse.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                                <Link to={'/unload'}><button class="btn btn-secondary m-4 pl-16 pr-16">Detail</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row  m-4 p-4 project-size project-container'>
                        <div>
                            <img className='carousel-container carousel-size' src={p3} alt="" />
                        </div>
                        <div>
                            <div className='ml-2 text-size text-container'>
                                <h2 className='text-2xl font-bold '>Smile Sharp</h2>
                                
                                <a href="https://simle-sharp-photography.netlify.app/" target="_blank"><button class="btn btn-secondary m-4 pl-16 pr-16">Live</button></a>
                                <Link to={'/smilesharp'}><button class="btn btn-secondary m-4 pl-16 pr-16">Detail</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Contract></Contract>
        </div>
    );
};

export default Home;