import Image from 'next/image';
import Link from 'next/link';
import XIcon from "../../../public/images/twt-icon.svg";
import FbIcon from "../../../public/images/fb-icon.svg";
import IgIcon from "../../../public/images/ig-icon.svg";
import EnvelopeIcon from "../../../public/images/envelope-icon.svg";
import PhoneIcon from "../../../public/images/phone-icon.svg";
import WaIcon from "../../../public/images/wa-icon.svg";

const Footer = () => {
   return (
      <footer className="bg-[#2B2B38]">
         <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Company Info */}
               <div>
                  <Image
                     src="/images/logo.png"
                     alt="Panglima Propertindo"
                     width={160}
                     height={45}
                     className="mb-4 md:mb-6 w-[140px] md:w-[160px]"
                  />
                  <p className="text-white text-sm md:text-base mb-4">
                     Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
                  </p>
               </div>

               {/* Quick Links */}
               <div className="pt-2 md:pt-0">
                  <h3 className="text-white font-medium text-lg mb-3 md:mb-4">Panglima Propetindo</h3>
                  <ul className="space-y-2 md:space-y-3">
                     <li>
                        <Link href="#" className="text-white hover:text-gray-300">
                           Tentang Kami
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-white hover:text-gray-300">
                           Project
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-white hover:text-gray-300">
                           Pertanyaan Umum
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact */}
               <div className="pt-2 md:pt-0">
                  <h3 className="text-white font-medium text-lg mb-3 md:mb-4">Kontak</h3>
                  <ul className="space-y-2 md:space-y-3">
                     <li>
                        <Link href="https://wa.me/081224090989" className="text-white hover:text-gray-300 flex items-center gap-2 text-sm md:text-base">
                           <Image src={WaIcon} alt="Instagram" width={16} height={16} />
                           081224090989 (chat)
                        </Link>
                     </li>
                     <li>
                        <Link href="tel:(021)2829-0901" className="text-white hover:text-gray-300 flex items-center gap-2">
                           <Image src={PhoneIcon} alt="Instagram" width={16} height={16} />
                           (021) 2829-0901
                        </Link>
                     </li>
                     <li>
                        <Link href="mailto:Layanan@panglimapropertindo.com" className="text-white hover:text-gray-300 flex items-center gap-2">
                           <Image src={EnvelopeIcon} alt="Instagram" width={16} height={16} />
                           Layanan@panglimapropertindo.com
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         {/* Copyright & Social Media */}
         <div className="bg-[rgba(40,124,62,1)] py-4">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                  <p className="text-white text-xs md:text-sm text-center md:text-left">
                     ©Copyright Panglima Propertindo 2024. All Right Reserved
                  </p>
                  <div className="flex gap-4 items-center">
                     <Link href="#" className="text-white hover:opacity-80">
                        <Image src={FbIcon} alt="Facebook" width={24} height={24} />
                     </Link>
                     <Link href="#" className="text-white hover:opacity-80">
                        <Image src={XIcon} alt="Twitter" width={24} height={24} />
                     </Link>
                     <Link href="#" className="text-white hover:opacity-80">
                        <Image src={IgIcon} alt="Instagram" width={24} height={24} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;