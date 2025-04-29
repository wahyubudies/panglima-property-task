"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   return (
      <nav className="border-b border-gray-100 fixed top-0 left-0 w-full bg-white z-50">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-[72px]">
               <Link href="/" className="flex items-center">
                  <Image
                     src="/images/logo.png"
                     alt="Panglima Propertindo"
                     width={160}
                     height={45}
                     priority
                  />
               </Link>

               <div className="hidden lg:flex items-center gap-8">
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]">
                     Beranda
                  </Link>
                  <div className="relative group">
                     <button className="font-inter text-[14px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)] flex items-center gap-1">
                        Project
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </button>
                  </div>
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]">
                     Tentang Kami
                  </Link>
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]">
                     Pertanyaan Umum
                  </Link>
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]">
                     Cara Booking
                  </Link>
               </div>

               {/* Auth Buttons */}
               <div className="hidden lg:flex items-center gap-4">
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-[rgba(250,149,0,1)] hover:text-[rgba(250,149,0,1)] px-4 py-2 rounded-lg border border-[rgba(250,149,0,1)]">
                     Daftar
                  </Link>
                  <Link
                     href="/#"
                     className="font-inter text-[14px] font-medium text-white bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800 px-4 py-2 rounded-lg border">
                     Masuk
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  ) : (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         <div className={`
            z-50 fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-white transition-opacity duration-300 ease-in-out
            ${!isMobileMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}
            md:hidden
         `}>
            <div className="container p-6 space-y-6 mx-auto">
               <div className="space-y-4">
                  <Link
                     href="/#"
                     className="block font-inter text-[16px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     Beranda
                  </Link>
                  <div className="relative">
                     <button className="font-inter text-[16px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)] flex items-center gap-1">
                        Project
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </button>
                  </div>
                  <Link
                     href="/#"
                     className="block font-inter text-[16px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     Tentang Kami
                  </Link>
                  <Link
                     href="/#"
                     className="block font-inter text-[16px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     Pertanyaan Umum
                  </Link>
                  <Link
                     href="/#"
                     className="block font-inter text-[16px] font-medium text-gray-900 hover:text-[rgba(250,149,0,1)]"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     Cara Booking
                  </Link>
               </div>

               <div className="space-y-4 pt-4 border-t">
                  <Link
                     href="/#"
                     className="block text-center font-inter text-[14px] font-medium text-[rgba(250,149,0,1)] hover:text-[rgba(250,149,0,1)] px-4 py-2 rounded-lg border border-[rgba(250,149,0,1)]"
                     onClick={() => setIsMobileMenuOpen(false)}>
                     Daftar
                  </Link>
                  <Link
                     href="/#"
                     className="block text-center font-inter text-[14px] font-medium text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg"
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     Masuk
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navigation;