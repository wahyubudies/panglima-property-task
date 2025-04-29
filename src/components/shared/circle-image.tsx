import Image, { StaticImageData } from 'next/image';

interface CircleImageProps {
   imageUrl: string | StaticImageData;
   iconUrl: string | StaticImageData;
   alt: string;
   label?: string;
}

const CircleImage = ({ imageUrl, iconUrl, alt, label }: CircleImageProps) => {
   return (
      <div className="relative w-[48px] h-[48px] group">
         <div className="group-hover:-top-[10px] w-full h-full rounded-full overflow-hidden relative transition-all">
            <Image
               src={imageUrl}
               alt={alt}
               fill
               className="object-cover"
            />
         </div>
         <div className="group-hover:-top-[10px] w-full h-full absolute inset-0 rounded-full bg-black opacity-30 group-hover:bg-orange-primary group-hover:opacity-90"></div>
         <div className="group-hover:-top-[24px] absolute inset-0 flex items-center justify-center z-10 transition-all">
            <Image
               src={iconUrl}
               alt="icon"
               width={24}
               height={24}
            />
         </div>
         {label && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-sm bg-white rounded-lg px-2 font-normal">
               {label}
            </div>
         )}
      </div>
   );
};

export default CircleImage;