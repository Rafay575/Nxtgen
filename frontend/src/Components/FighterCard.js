import React from 'react';

const FighterCard = () => {
  return (
    <div className='bg-black py-5 text-white  text-center'>
    <h1 className='font-bold text-3xl my-10'>Our ATHLETES</h1>
    <div className=" flex flex-col md:flex-row items-center justify-center md:justify-around">
      <div className="mb-8">
        <div className="bg-black relative text-center">
          <img src="/images/img-1.png" alt="Jake Paul" className="w-full h-[400px]"/>
          <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-xl font-bold py-2">RAJAB BUTT</p>
        </div>
      </div>
      <div>
        <div className="bg-black relative text-center">
          <img src="/images/img-2.jpg" alt="Amanda Serrano" className="w-full h-[400px]"/>
          <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-xl font-bold py-2">ANAS ALI</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FighterCard;
