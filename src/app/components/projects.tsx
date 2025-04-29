import { ProjectCard, ProjectCardProps } from '@/components/shared/project-card';
import React from 'react';

const Projects = ({ projects }: { projects: ProjectCardProps[]; }) => {
   return (
      <div className="px-4 py-12 md:py-16 bg-[rgb(246,247,250)]">
         <div className="container mx-auto px-4">
            <h2 className="text-[24px] md:text-[30px] font-[600] leading-[32px] md:leading-[36px] tracking-[-0.025em] font-inter mb-2">
               Project
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 font-inter text-[14px] md:text-base font-normal leading-6 md:leading-7">
               Berikut adalah daftar project dari Panglima Propertindo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               {projects.map((project, index) => (
                  <ProjectCard
                     key={index}
                     {...project}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Projects;