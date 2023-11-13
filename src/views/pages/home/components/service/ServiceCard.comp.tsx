import { useState } from "react";
import { ModalComp } from "../../../../../components/shared/modal/Modal.comp";

type ServicePropType = {
  cardObj: {
    cardLink: string;
    imgLink: string;
    serviceTitle: string;
    serviceDesc: string;
  };
};
export const ServiceCardComp = ({ cardObj }: ServicePropType) => {
  const [isModal, setIsModal] = useState(false);

  const shortDesc = cardObj.serviceDesc.split(" ").slice(0, 30).join(" ");

  return (
    <>
      <div
        className="rounded-md shadow-md hover:shadow-lg hover:bg-slate-100 hover:cursor-pointer"
        onClick={() => setIsModal(true)}
      >
        <img src={cardObj.imgLink} alt="" className="rounded-t-sm" />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-3">{cardObj.serviceTitle}</h3>
          <p className=" text-sm">
            {shortDesc}| <b>Details...</b>{" "}
          </p>
        </div>
      </div>
      {isModal && (
        <ModalComp modalFn={setIsModal}>
          <h2>{cardObj.serviceTitle}</h2>
        </ModalComp>
      )}
    </>
  );
};
