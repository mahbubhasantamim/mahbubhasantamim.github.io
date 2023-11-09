import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";

export const EducationComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Education</SectionHeadingComp>
        <div className="py-6">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-700 p-6 bg-slate-100 rounded-md">
            <div className="hover:bg-slate-50 rounded-md p-5">
              <p className="text-sm bg-white inline-block px-4 rounded-md">
                2023
              </p>
              <h3 className="text-lg font-semibold  ">
                Diploma in Computer Engineering
              </h3>
              <p className="font-Edu-nsw mt-1">
                National Institute of Enginnering & Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
