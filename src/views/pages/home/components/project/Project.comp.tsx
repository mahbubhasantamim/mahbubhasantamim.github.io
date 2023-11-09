import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";

export const ProjectComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Projects</SectionHeadingComp>
        <div className="py-6">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-700 p-6 bg-slate-100 rounded-md shadow-md"></div>
        </div>
      </div>
    </>
  );
};
