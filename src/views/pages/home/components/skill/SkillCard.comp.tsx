import React, { ReactNode } from "react";
interface propsType {
  cardTitle: string;
  children: ReactNode;
}
const SkillCardComp = ({ cardTitle, children }: propsType) => {
  return (
    <>
      <div className="bg-gradient-to-tr from-slate-100 via-purple-100 to-pink-50 text-center p-4 rounded-md shadow-md hover:shadow-sm hover:cursor-help">
        <h3 className="mb-2">{cardTitle}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {React.Children.map(children, (child, index) => {
            return (
              <div key={index} className="bg-slate-50 p-2 rounded-md">
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillCardComp;
