import { Link } from "react-router-dom";

type ServicePropType = {
  cardObj: {
    cardLink: string;
    imgLink: string;
    serviceTitle: string;
    serviceDesc: string;
  };
};
export const ServiceCardComp = ({ cardObj }: ServicePropType) => {
  return (
    <>
      <div className="rounded-md shadow-md hover:shadow-lg hover:bg-slate-100">
        <Link to={cardObj.cardLink}>
          <img src={cardObj.imgLink} alt="" className="rounded-t-sm" />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              {cardObj.serviceTitle}
            </h3>
            <p className=" text-sm">{cardObj.serviceDesc}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
