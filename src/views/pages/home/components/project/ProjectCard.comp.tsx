import { ModalComp } from "@/components/shared/modal/Modal.comp";
import { useState } from "react";

type ProjectPropType = {
  projectDetails: {
    projectImg: string;
    projectTitle: string;
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
          <p>{projectDetails.projectTitle}</p>
        </ModalComp>
      )}
    </>
  );
};
