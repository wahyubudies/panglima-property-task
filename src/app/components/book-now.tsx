import React from 'react';
import { Button } from '@/components/ui/button';
import ImagePattern from "@/../public/images/pattern-book.svg";
import CartIcon from "@/../public/images/cart-icon.svg";
import Image from 'next/image';

const BookNow = () => {
   return (
      <div className="p-4 md:p-10 bg-[rgb(246,247,250)]">
         <div className="container mx-auto relative bg-[rgba(250,149,0,1)] min-h-[280px] md:h-[328px] items-center flex rounded-xl overflow-hidden">
            <Image
               src={ImagePattern}
               alt=""
               width={1280}
               height={328}
               className='absolute bottom-0 left-0 w-full object-cover'
            />
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4 md:px-0 py-8 md:py-0">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Booking Sekarang!
               </h2>
               <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">
                  Tunggu apalagi, booking sekarang property syariah impian Anda
               </p>
               <Button className="bg-green-700 hover:bg-green-800 text-white text-sm md:text-base gap-2">
                  <Image src={CartIcon} width={16} height={15} alt="" />
                  Daftar & Beli NUB
               </Button>
            </div>
         </div>
      </div>
   );
};

export default BookNow;;