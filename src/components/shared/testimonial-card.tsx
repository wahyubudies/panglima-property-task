import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
   name: string;
   image: string;
   text: string;
}

const TestimonialCard = ({ name, image, text }: TestimonialCardProps) => {
   return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
         <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
               <Image
                  src={image}
                  alt={name}
                  fill
                  sizes='fill'
                  className="object-cover"
               />
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
         </div>

         <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
               <svg key={i} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.83603 0L10.4404 4.44033L15.4978 5.52786L12.05 9.35967L12.5712 14.4721L7.83603 12.4L3.10083 14.4721L3.62209 9.35967L0.174316 5.52786L5.23167 4.44033L7.83603 0Z" fill="#FA9500" />
               </svg>
            ))}
         </div>

         <p className="text-gray-600 text-sm min-h-[100px]">{text}</p>
      </div>
   );
};

export default TestimonialCard;