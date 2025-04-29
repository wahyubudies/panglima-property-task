import { StatCard } from '@/components/shared/stat-card';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
   return (
      <div className="px-4 py-12 md:py-16">
         <div className="container mx-auto">
            <h2 className="text-[24px] md:text-[30px] font-[600] leading-[32px] md:leading-[36px] tracking-[-0.025em] font-inter mb-2">
               Tentang Kami
            </h2>

            <div>
               <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[20px] mb-6 md:mb-8">
                  <Image
                     src="/images/logo.png"
                     alt="Panglima Propertindo"
                     width={200}
                     height={56}
                     className="md:w-[284px] md:h-[80px]"
                  />
                  <p className="font-inter text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-[400] text-gray-600">
                     Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan Lingkungan yang Baik.
                  </p>
               </div>

               <div className='flex justify-center items-center h-[400px] md:h-[320px] bg-(image:--banner-about-us) p-4 md:p-10 max-w-[1200px] mx-auto rounded-lg bg-center bg-cover relative'>
                  <div className="bg-black absolute w-full inset-0 h-full rounded-lg opacity-50"></div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full z-10">
                     <StatCard value="6+" label="Project Syariah" />
                     <StatCard value="200+" label="Telah STR" />
                     <StatCard value="200+" label="Telah STR" />
                     <StatCard value="200+" label="Telah STR" />
                     <StatCard value="200+" label="Telah STR" />
                  </div>
               </div>
            </div>

            <div className="space-y-6 md:space-y-8 mt-8 md:mt-10">
               <div className='border border-[rgba(228,228,231,1)] rounded-lg p-4 md:p-5'>
                  <h3 className="text-[18px] md:text-[20px] font-[600] leading-[24px] md:leading-[28px] tracking-[-0.025em] font-inter mb-3 md:mb-4">
                     Visi
                  </h3>
                  <p className="font-inter text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-[400] text-gray-600">
                     Menjadi Developer Property Syariah Kelas Dunia, pengembang lingkungan pemukiman yang baik yang Menenangkan Hati.
                  </p>
               </div>

               <div className='border border-[rgba(228,228,231,1)] rounded-lg p-4 md:p-5'>
                  <h3 className="text-[18px] md:text-[20px] font-[600] leading-[24px] md:leading-[28px] tracking-[-0.025em] font-inter mb-3 md:mb-4">
                     Misi
                  </h3>
                  <ul className="list-disc pl-4 md:pl-5 space-y-2 font-inter text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-[400] text-gray-600">
                     <li>Mengembangkan proyek Property yang memberi value terbaik & ketenangan hati.</li>
                     <li>Membentuk lingkungan yang berperan nyata dalam pembentukan Peradaban Mulia.</li>
                     <li>Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat mensejahterakan para pemangku kepentingan</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;;