import React from 'react';
import {FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* company details section */}
               
                <div data-aos="fade-up"  className='space-y-6'>
                    <h1 
                    className='text-4xl font-bold'>
                        Orange Mint
                    </h1>
                    <p className=' text-sm max-w-[300px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam molestias adipisci corporis ad eveniet qui, 
                        quasi eius quia obcaecati maiores maxime nesciunt cupiditate perferendis architecto.
                    </p>
                </div>
                
                {/* NAVLINK SECTION */}
           

                <div data-aos="fade-up" data-a0s-delay="300" className='space-y-6'>
                <h1 
                className='text-4xl font-bold'>
                        Quick Links
                    </h1> 
                    <div className='grid grid-cols-2 gap-3'>
                        {/* FIRST COLUMN LINKS */}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                      
                        </div>
                           {/* SECOND COLUMN LINKS */}
                           <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>

                {/* SOCIAL LINK SECTION */}
                <div data-aos="fade-up" data-a0s-delay="500" className='space-y-6'>
                    <h1 
                    className='text-4xl font-bold'>Follow Us</h1>
                    <div>
                        <p>+91 987654321</p>
                        <p>Chennai, TamilNadu</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                </div>

   
            </div>
            {/* COPYRIGHT SECTION */}
            <p className='text-white text-center mt-8 pt-8 border-t-2'>
                Copyright &copy; 2024 A to Z company.All rights reserved.
            </p>
        </div>
    </div>
  );
}

export default Footer;
