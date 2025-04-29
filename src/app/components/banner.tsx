import React from 'react';
import CircleImage from "@/components/shared/circle-image";
import HouseIcon from "../../../public/images/house-icon.svg";
import GraveIcon from "../../../public/images/grave-icon.svg";
import ParkIcon from "../../../public/images/park-icon.svg";
import PinIcon from "../../../public/images/pin-icon.svg";
import House from "../../../public/images/house.jpg";
import Grave from "../../../public/images/grave.jpg";
import Park from "../../../public/images/park.jpg";
import Kavling from "../../../public/images/kavling.jpg";

const Banner = () => {
   return (
      <div className="px-4 flex items-center md:py-36 mt-[73px] bg-(image:--banner) bg-bottom bg-no-repeat bg-cover bg-[#f4f4f6] h-[537px]">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl">
               <h1 className="font-['Inter'] text-[24px] md:text-[36px] font-semibold leading-[36px] md:leading-[54px] tracking-[-0.025em] align-middle mb-4">
                  <span className="text-green-700">Hidup Nyaman & Berkah</span> dengan Properti
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2 mt-2 md:mt-0">
                     <span>Syariah Kelas Dunia</span>
                     <div className="flex -space-x-2">
                        <CircleImage
                           imageUrl={House}
                           iconUrl={HouseIcon}
                           alt="Rumah"
                           label="Rumah"
                        />
                        <CircleImage
                           imageUrl={Grave}
                           iconUrl={GraveIcon}
                           alt="Makam"
                           label="Makam"
                        />
                        <CircleImage
                           imageUrl={Kavling}
                           iconUrl={PinIcon}
                           alt="Kavling"
                           label="Kavling"
                        />
                        <CircleImage
                           imageUrl={Park}
                           iconUrl={ParkIcon}
                           alt="Taman"
                           label="Taman"
                        />
                     </div>
                  </div>
               </h1>
               <p className="font-['Inter'] text-gray-600 text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[30px] tracking-[0%] align-middle mb-6 md:mb-8">
                  Developer Properti Syariah terdepan menghadirkan solusi properti tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang juga!
               </p>
               <button className="w-full md:w-auto bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Daftar & Beli NUB
               </button>
            </div>
         </div>
      </div>
   );
};

export default Banner;