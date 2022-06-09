import React from 'react';
import './Home.css';
import myPic from '../../Images/My-pic/My-pic.png';

const Home = () => {
    return (
        <div className=''>
            <div className='flex flex row bg-img '>
                <div className='ml-32 mt-32 text-white'>
                    <p className='text-lg'>Hello, I am</p>
                    <h1 className='text-7xl font-bold'>Fardous Hossain</h1>
                    <p className='text-lg mb-4'>A Young MERN stack Web Developer, Front-end Web Developer </p>
                    <a href="https://drive.google.com/u/0/uc?id=1C1zPekQSubWO2rgK66K6DDrsis51FAaa&export=download" target="_blank"><button class="btn btn-secondary">Download Resume</button></a>
                </div>
                <div>
                    <img className='my-img' src={myPic}  alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Home;