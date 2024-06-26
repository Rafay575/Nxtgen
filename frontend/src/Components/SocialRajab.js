import React from 'react';

const SocialProfile = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-8 gap-4  rounded-lg shadow-md overflow-hidden" >

    <div className=" mx-auto   rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex items-start space-x-3">
          <img src="/images/rpic.jpeg" alt="Profile Icon" className="h-10 w-10 rounded-full"/>
          <div className="space-y-1">
            <h1 className="text-lg font-bold">Rajab Butt</h1>
            <p className="text-gray-500">@rajab_butt94</p>
            <p className="text-gray-500">657K followers</p>
            <p className="text-gray-500">15 posts</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 p-1">
        {/* Map through your posts data and render images */}
        {[1,2,3,4,5,6].map((_, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img src={`/images/r-${_}.jpg`} alt={`Post ${index}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-100 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href='https://www.instagram.com/rajab.butt94/' className="inline-block w-full h-full">
            View full profile on Instagram
            </a>
        </button>
      </div>
    </div>
      </div>
  );
};

export default SocialProfile;
