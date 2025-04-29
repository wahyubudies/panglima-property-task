"use client";

import React from 'react';
import TestimonialCard from '../../components/shared/testimonial-card';
import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
} from '@/components/ui/carousel';

const testimonials = [
   {
      id: 1,
      name: "Ujang Gunawan",
      image: "/images/testimony-image-1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus facilisis. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum magna."
   },
   {
      id: 2,
      name: "Dedik Dryfan",
      image: "/images/testimony-image-2.jpg",
      text: "Sed non sed ultricies ultrices iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula. Volutpat dignissim duis id velit. Integer mattis egestas neque amet. Turpis purus donec id velit sed morbi ultrices."
   },
   {
      id: 3,
      name: "Putra Dadang Heriawan",
      image: "/images/testimony-image-3.jpg",
      text: "Lorem ipsum dolor sit amet consectetur. In ornare aliquam imperdiet dolor porta enim justo. Sed non sed ultrices ultrices iaculis turpis ut tincidunt orci. Ipsum id nullam urna et vehicula."
   },
   {
      id: 4,
      name: "Sarah Anderson",
      image: "/images/testimony-image-2.jpg",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
   },
   {
      id: 5,
      name: "Michael Chen",
      image: "/images/testimony-image-3.jpg",
      text: "Nullam auctor gravida sem, ac efficitur erat hendrerit non. Sed mollis, purus ac fermentum elementum, urna nisl ullamcorper diam, vitae placerat libero nunc sed nulla."
   }
];

const Testimony = () => {
   const [api, setApi] = React.useState<CarouselApi>();
   const [current, setCurrent] = React.useState(0);

   React.useEffect(() => {
      if (!api) {
         return;
      }
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   const handleClick = (index: number) => {
      if (!api) return;
      api.scrollTo(index);
   };

   return (
      <section className="py-12 md:py-16 bg-[rgba(244,244,245,0.8)]">
         <div className="container mx-auto px-4">
            <h2 className="text-[24px] md:text-[30px] font-[600] leading-[32px] md:leading-[36px] tracking-[-0.025em] font-inter mb-6 md:mb-10">
               Ulasan dari Konsumen
            </h2>

            <Carousel setApi={setApi} opts={{
               align: "start",
               loop: true
            }} className="w-full">
               <CarouselContent className='-ml-2 md:-ml-4'>
                  {testimonials.map((testimonial) => (
                     <CarouselItem 
                        key={testimonial.id} 
                        className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                     >
                        <TestimonialCard
                           name={testimonial.name}
                           image={testimonial.image}
                           text={testimonial.text}
                        />
                     </CarouselItem>
                  ))}
               </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 md:mt-6">
               {testimonials.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => handleClick(index)}
                     className={`w-[8px] h-[8px] md:w-[10px] md:h-[10px] mx-1 rounded-full cursor-pointer transition-colors ${
                        (index + 1) === current ? 'bg-green-600' : 'bg-gray-300'
                     }`}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Testimony;