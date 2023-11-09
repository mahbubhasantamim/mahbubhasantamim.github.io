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
        className="hover:bg-slate-50 hover:cursor-pointer"
      >
        <img src={projectDetails.projectImg} alt="" />
        <p className="py-2 text-center text-xs md:text-sm">
          {projectDetails.projectTitle}
        </p>
      </div>
      {isModal && (
        <ModalComp modalFn={setIsModal}>
          <p>{projectDetails.projectTitle}</p>
        </ModalComp>
      )}
    </>
  );
};
