import { ModalComp } from "@/components/shared/modal/Modal.comp";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProjectPropType = {
  projectDetails: {
    projectImg: string;
    projectTitle: string;
    projectUrl: string;
  };
};
export const ProjectCardComp = ({ projectDetails }: ProjectPropType) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModal(true)}
        className="rounded-md hover:cursor-pointer hover:shadow-md"
      >
        <div className="relative">
          <img src={projectDetails.projectImg} alt="" className="rounded-md" />
          <div className="bg-gradient-to-t from-slate-300 w-full absolute bottom-0">
            <h3 className="pt-8 pb-1 text-center text-xs md:text-base uppercase font-bold">
              {projectDetails.projectTitle}
            </h3>
          </div>
        </div>
      </div>
      {isModal && (
        <ModalComp modalFn={setIsModal}>
          <p className="pb-8">{projectDetails.projectTitle}</p>
          <Link
            to={projectDetails.projectUrl}
            target="_blank"
            className="bg-slate-600 text-slate-50 py-2 px-4 rounded-md block text-center hover:bg-slate-400"
          >
            Live url
          </Link>
        </ModalComp>
      )}
    </>
  );
};
