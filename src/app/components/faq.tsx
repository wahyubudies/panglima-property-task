"use client";

import React from 'react';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
   {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam."
   },
   {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam."
   },
   {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque."
   },
   {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque."
   }
];

const Faq = () => {
   return (
      <div className="px-4 py-12 md:py-16">
         <div className="container mx-auto">
            <h2 className="text-[24px] md:text-[30px] font-[600] leading-[32px] md:leading-[36px] tracking-[-0.025em] font-inter mb-6 md:mb-8">
               Pertanyaan Umum
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4" defaultValue="item-1">
               {faqs.map((faq, index) => (
                  <AccordionItem
                     key={index}
                     value={`item-${index}`}
                     className="border-b border-[#cccccc] border-dashed px-3 md:px-6 py-2">
                     <AccordionTrigger className="font-inter text-base md:text-lg font-semibold leading-6 md:leading-7 hover:no-underline text-left">
                        {faq.question}
                     </AccordionTrigger>
                     <AccordionContent className="font-inter font-normal text-[14px] md:text-base leading-6 md:leading-7 text-[rgba(113,113,122,1)]">
                        {faq.answer}
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </div>
      </div>
   );
};

export default Faq;