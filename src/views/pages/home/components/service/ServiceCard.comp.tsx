import { useState } from "react";
import { ModalComp } from "../../../../../components/shared/modal/Modal.comp";

type ServicePropType = {
  cardObj: {
    cardLink: string;
    imgLink: string;
    serviceTitle: string;
    technology: string[];
    whyChsMe: string[];
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
          <div className="mb-4">
            <h2 className="text-lg font-semibold uppercase border-b-2 mb-4 text-center bg-slate-200 p-1 rounded-md">
              {cardObj?.serviceTitle}
            </h2>
            <p className="text-sm">{cardObj?.serviceDesc}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Technology :</h3>
            <ul className="flex flex-wrap gap-1 text-xs">
              {cardObj.technology.map((item) => (
                <li className="bg-slate-200 py-1 px-4 rounded-md">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">My Approach :</h3>
            <p className="text-sm">
              I believe in the power of clean code, elegant design, and seamless
              user experiences. Every line of code I write is aimed at creating
              websites and applications that not only look great but also
              perform exceptionally well. I am committed to staying updated with
              the latest industry trends and technologies, ensuring that my
              solutions are always at the forefront of innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Why chose me :</h3>
            <ul className="text-sm">
              {cardObj.whyChsMe.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </ModalComp>
      )}
    </>
  );
};
