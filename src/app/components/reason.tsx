import React from 'react';
import XIcon from "../../../public/images/x-icon.svg";
import XOnlyIcon from "../../../public/images/x-only-icon.svg";
import NoRibaIcon from "../../../public/images/no-riba-icon.svg";
import NoBankIcon from "../../../public/images/no-bank-icon.svg";
import NoSitaIcon from "../../../public/images/no-sita-icon.svg";
import NoFineIcon from "../../../public/images/no-fine-icon.svg";
import NoPenaltyIcon from "../../../public/images/no-penalty-icon.svg";
import NoContractIssueIcon from "../../../public/images/no-contract-issue-icon.svg";
import Image from 'next/image';

interface ReasonCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
   return (
      <div className="group flex items-stretch">
         <div className="bg-[rgba(40,124,62,1)] rounded-lg p-6 text-white relative  group-hover:border-[rgba(250,149,0,1)] border-2 border-transparent">
            <div className="flex items-center gap-2 mb-4">
               <div className="relative w-[48px] rounded-lg h-[48px] flex items-center justify-center bg-white">
                  {/* Main Icon */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                     {icon}
                  </div>
                  {/* X Only Icon - Hidden by default, shows on hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                     <Image src={XOnlyIcon} alt="" width={32} height={32} />
                  </div>
                  {/* Moving X Icon */}
                  <div className="absolute -right-[10px] -bottom-[10px] flex items-center justify-center transition-all duration-300 group-hover:right-[8px] group-hover:bottom-[8px] group-hover:opacity-0">
                     <Image src={XIcon} alt="" width={32} height={32} />
                  </div>
               </div>
               <h4 className="font-inter text-[20px] font-[600] leading-[28px] tracking-[-0.025em]">{title}</h4>
            </div>
            <p className="font-inter text-[14px] font-[400] leading-[20px]">{description}</p>
         </div>
      </div>
   );
};

const Reason = () => {
   const reasons = [
      {
         icon: <Image src={NoRibaIcon} alt="" width={32} height={32} />,
         title: "Tanpa Riba",
         description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil"
      },
      {
         icon: <Image src={NoBankIcon} alt="" width={32} height={32} />,
         title: "Tanpa KPR Bank",
         description: "Tanpa melibatkan pembiayaan bank konvensional, menghindari riba, gharar (ketidakpastian), dan maysir (spekulasi)"
      },
      {
         icon: <Image src={NoSitaIcon} alt="" width={32} height={32} />,
         title: "Tanpa Sita",
         description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil"
      },
      {
         icon: <Image src={NoFineIcon} alt="" width={32} height={32} />,
         title: "Tanpa Denda",
         description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil"
      },
      {
         icon: <Image src={NoPenaltyIcon} alt="" width={32} height={32} />,
         title: "Tanpa Penalti",
         description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil"
      },
      {
         icon: <Image src={NoContractIssueIcon} alt="" width={32} height={32} />,
         title: "Tanpa Akad Bermasalah",
         description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil"
      }
   ];

   return (
      <div className="px-4 py-12 md:py-16 bg-[rgba(40,40,53,1)] bg-(image:--banner-reason) bg-no-repeat bg-top">
         <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
               <h2 className="text-white text-[24px] md:text-[30px] font-[600] leading-[36px] md:leading-[48px] tracking-[-0.025em] font-inter lg:min-w-[300px]">
                  Kenapa Harus
                  <span className="block text-orange-primary font-inter text-[24px] md:text-[30px] font-[600] leading-[36px] md:leading-[48px] tracking-[-0.025em]">
                     Panglima Propertindo?
                  </span>
               </h2>
               <p className="text-white font-inter text-[14px] md:text-base font-normal leading-[24px] md:leading-[28px] md:grow md:max-w-3xl">
                  Dengan komitmen penuh pada prinsip-prinsip syariah, kami menghadirkan properti berkualitas tinggi yang memberikan keamanan dan keberkahan bagi Anda dan keluarga.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               {reasons.map((reason, index) => (
                  <ReasonCard
                     key={index}
                     icon={reason.icon}
                     title={reason.title}
                     description={reason.description}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Reason;