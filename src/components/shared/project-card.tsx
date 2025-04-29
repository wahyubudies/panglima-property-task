import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
   title: string;
   location: string;
   mapUrl: string;
   image: string;
   unitTypes: string[];
}

export function ProjectCard({ title, location, mapUrl, image, unitTypes }: ProjectCardProps) {
   return (
      <div className="bg-white w-full h-[413px] rounded-lg overflow-hidden shadow-sm border border-gray-100 p-4 gap-4 shadow-slate-200 hover:border-[rgba(40,124,62,1)]">
         <div className="relative overflow-hidden w-full h-[208px] px-5 rounded-lg">
            <Image
               src={image}
               alt={title}
               fill
               className="object-cover"
            />
         </div>

         <div className="py-4">
            <h3 className="font-['Inter'] font-semibold text-[20px] leading-[28px] tracking-[-2.5%] overflow-hidden text-ellipsis  whitespace-nowrap">{title}</h3>

            <div className="flex items-center gap-2 pt-4">
               <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 10.5C20.5 16.5 12.5 22.5 12.5 22.5C12.5 22.5 4.5 16.5 4.5 10.5C4.5 8.37827 5.34285 6.34344 6.84315 4.84315C8.34344 3.34285 10.3783 2.5 12.5 2.5C14.6217 2.5 16.6566 3.34285 18.1569 4.84315C19.6571 6.34344 20.5 8.37827 20.5 10.5Z" stroke="#FA9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5 13.5C14.1569 13.5 15.5 12.1569 15.5 10.5C15.5 8.84315 14.1569 7.5 12.5 7.5C10.8431 7.5 9.5 8.84315 9.5 10.5C9.5 12.1569 10.8431 13.5 12.5 13.5Z" stroke="#FA9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>

               <div className='overflow-hidden'>
                  <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{location}</p>
                  <Link
                     href={mapUrl}
                     className="font-['Inter'] font-normal text-[14px] text-orange-primary leading-[20px] tracking-[0%] align-middle hover:underline inline-flex items-center gap-1">
                     Lihat di Map
                     <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16675 4.66699H11.8334M11.8334 4.66699V11.3337M11.8334 4.66699L5.16675 11.3337" stroke="#FA9500" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </Link>
               </div>
            </div>

            <div className="pt-4">
               <p className="font-['Inter'] font-normal text-[14px] text-gray-600 leading-[20px] tracking-[0%] align-middle mb-2">Tipe Unit</p>
               <div className="flex flex-wrap gap-2">
                  {unitTypes.map((type, index) => (
                     <span
                        key={index}
                        className="w-fit flex items-center h-6 gap-2 pt-0.5 pr-3 pb-0.5 pl-3 rounded-full text-sm text-center bg-[rgba(250,149,0,0.08)] text-[rgba(9,9,11,1)] border border-orange-primary">
                        {type}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}