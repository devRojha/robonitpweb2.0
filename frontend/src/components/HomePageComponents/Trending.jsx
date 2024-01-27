import React from 'react'
import TrendingCard from "./TrendingCard";
import trendingData from "../../trendingData";

const Trending = () => {
  return (
    <div className="flex flex-col md:mx-4 items-center justify-center md:justify-start">
      <div className='ml-8 mr-8'>
              <h1 className='font-anton text-8xl'
                 style={{
                  WebkitTextStroke:'1px white',
                  color:'black',
                  textStroke:'1px white'
                 }}>
                     WHATS
              </h1>
              <h1 className='font-anton text-8xl text-white'>TRENDING</h1>
         </div>

      {/* TrendingCard */}

      <div className="grid md:grid-cols-3 grid-rows-3 gap-16 md:mx-6 mt-16 mb-10 justify-center items-center overflow-x-scroll overflow-y-hidden bg-yellow-400 h-[160rem]">
        {trendingData.map((item) => (
          <TrendingCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
