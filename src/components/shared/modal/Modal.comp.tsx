import { FaTimes } from "react-icons/fa";

type ModalPropType = {
  modalFn: (isModal: boolean) => void;
  children?: React.ReactNode;
};

export const ModalComp = ({ modalFn, children }: ModalPropType) => {
  return (
    <>
      <div className="fixed bg-gray-600 w-full h-full top-0 left-0 z-10 bg-opacity-50">
        <div className="fixed w-4/6 mt-8 left-2/4 transform -translate-x-2/4 px-6 py-14 bg-white z-10 rounded-md shadow-lg border-2 border-slate-500 ">
          <div
            onClick={() => modalFn(false)}
            className="absolute top-0 right-0 hover:bg-slate-200 m-4 p-2 rounded-full hover:cursor-pointer"
          >
            <FaTimes className="text-slate-700" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
