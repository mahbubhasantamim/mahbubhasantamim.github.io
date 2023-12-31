import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";

import programSurfaceImg from "../../../../../assets/img/portfolio-img/program-surface.jpg";
import xeertImg from "../../../../../assets/img/portfolio-img/xeert.jpg";
import { ProjectCardComp } from "./ProjectCard.comp";

export const ProjectComp = () => {
  const projects = [
    {
      projectImg: xeertImg,
      projectTitle: "Xeert",
      projectUrl: "https://xeert.netlify.app/",
    },
    {
      projectImg: programSurfaceImg,
      projectTitle: "Program surface",
      projectUrl: "https://program-surface.onrender.com/",
    },
  ];

  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Projects</SectionHeadingComp>
        <div className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 bg-slate-100 rounded-md shadow-md">
            {projects.map((project, index) => (
              <ProjectCardComp key={index} projectDetails={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
