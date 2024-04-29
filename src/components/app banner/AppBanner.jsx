import React from 'react';
import Banner from '../../assets/banner.jpg';
import PlayStoreImg from '../../assets/play_store.png';
import AppStoreImg from '../../assets/app_store.png';

const AppBanner = () => {

    const bannerStyle = {
        backgroundImage:`url(${Banner})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:"100%",
    }
  return (
    <>
    <div className="container my-14">
        <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
            <div>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 data-aos="fade-up" 
                className='text-2xl text-center sm:text-4xl font-semibold'>
                    Download the app</h1>
                    <p data-aos="fade-up"
                     data-aos-delay="300"
                     className='text-center sm:px-20'>
                       Lorem ipsum dolor, sit amet consectetur  elit. 
                        omnis, rem, quod quasi asperiores tempora atque? 
                        {" "}
                    </p>
                    </div>
            
          

                    {/* IMAGES LINK */}
                    <div data-aos="fade-up" data-a0s-delay="300"
                    className='flex justify-center items-center gap-4'>
                        <a href="#">
                          <img src={PlayStoreImg} alt="" 
                          className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                          />  
                        </a>
                        <a href="#">
                          <img src={AppStoreImg} alt="" 
                          className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                          />  
                        </a>
                    </div>
                    </div>
            
        </div>
    </div>
      
    </>
  );
}

export default AppBanner;
