import { useState, useEffect } from 'react';
import { register } from "swiper/element/bundle";
import axios from 'axios';
import WildPick from './WildPick';
import SmallNavbar from '../SmallNavbar/SmallNavbar';
import Filter from "../Filter/Filter";

register();


const API = 'https://yatripbackend.onrender.com/wildlife/';


const Wild = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [displayedItems, setDisplayedItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loadMore = () => {
    setDisplayedItems(displayedItems + 3);
  };

  const[wilds,setWilds]= useState([]);
  const getWild = async (url) =>{
    try{
      const res =await axios.get(url);
      setWilds(res.data);
    }catch(error){
      console.log("Error fetchingin wild data", error);
    }
  }

  useEffect(() => {
    getWild(API);
}, []);

  return (
    <div>
      <div className="mt-8">
        <SmallNavbar />
      </div>

      <h4 className="font-SulphurPoint font-normal text-center text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D] mb-4  mt-4">
            Wild Life
          </h4>
        <div className="flex justify-center items-center py-2 xl:py-3">
         
       

        <div className="flex">
          {window.innerWidth >= 768 && (
            <div className="w-1/4 p-4">
              <Filter />
            </div>
          )}

          <div className="w-3/4">
            <div className={`grid grid-cols-1 md:grid-cols-3 ml-10 ${isMobile ? 'ml-20' : ''}`}>
              {/* {wildData.slice(0, displayedItems).map((item, index) => ( */}
              {wilds.map((item, index) => (
                <div key={index} className={`${isMobile ? 'w-full' : ''} cursor-pointer`}>
                  <WildPick image={item.image_url} name={item.name} city={item.city_name} state={item.state_name} />
                </div>
              ))}
            </div>

            {displayedItems < wilds.length && (
              <button
                className="mt-4 mx-auto w-[100%] bg-white-800 text-gray-600 px-4 py-2 rounded border border-gray-600 hover:bg-white hover:text-gray-600"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wild;
