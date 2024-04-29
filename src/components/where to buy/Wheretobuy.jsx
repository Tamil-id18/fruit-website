import React from 'react';
import WorldMapImg from '../../assets/world-map.png';

const Wheretobuy = () => {
  return (
    <>
      <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3
         gap-8 place-items-center'>
            {/* TEXT - CONTENT SECTION */}
            <div className='space-y-8'>
                <h1 data-aos="fade-up" data-a0s-delay="300"
                className='text-4xl font-bold text-dark font-serif'>Where to buy your products?</h1>
                <div data-aos="fade-up" data-a0s-delay="500" 
                className='flex items-center gap-4'>
                    <input type="text" placeholder='country'
                    className='input-style w-full lg:w-[120px]' />
                    <input type="text" placeholder='zipcode'
                    className='input-style' />
                </div>
                <button data-aos="fade-up" data-a0s-delay="700"
                className='primary-btn'>Search</button>
            </div>
            {/* MAP - SECTION */}
             <div data-aos="fade"  className='col-span-2'>
                <img src={WorldMapImg} alt=""
                className='w-full sm:w-[500px] mx-auto' />
             </div>

        </div>

      </div>
    </>
  );
}

export default Wheretobuy;

