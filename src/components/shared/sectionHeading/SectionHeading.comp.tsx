import { ReactNode } from "react";

interface propsType {
  children: ReactNode;
  className?: string;
}
const SectionHeadingComp = ({ children, className }: propsType) => {
  return (
    <>
      <h2
        className={`text-2xl font-semibold after:block after:h-2 after:w-20 after:bg-gradient-to-l from-pink-500 to-slate-400 after:animate-pulse after:rounded-md after:mx-auto text-center ${className}`}
      >
        {children}
      </h2>
    </>
  );
};

export default SectionHeadingComp;
