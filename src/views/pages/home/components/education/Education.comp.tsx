import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
type EducationType = {
  passingYear: number;
  courseName: string;
  Institute: string;
}[];

export const EducationComp = () => {
  const educationDetails: EducationType = [
    {
      passingYear: 2023,
      courseName: "Diploma in Computer Engineering",
      Institute: "National Institute of Engineering & Technology",
    },
    {
      passingYear: 2019,
      courseName: "Higher Secondary School Certificate",
      Institute: "Govt. Adamjee Nagar MW College",
    },
    {
      passingYear: 2017,
      courseName: "Secondary School Certificate",
      Institute: "Mugrakul Mohammadiya Dakhil Madrasah",
    },
  ];
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Education</SectionHeadingComp>
        <div className="py-6">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-700 p-6 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 rounded-md shadow-md">
            {educationDetails.map((edu, index) => (
              <div key={index} className="hover:bg-slate-50 p-5">
                <p className="text-xs md:text-sm bg-white inline-block px-4 rounded-md">
                  {edu.passingYear}
                </p>
                <h3 className="text-base md:text-lg font-semibold  ">
                  {edu.courseName}
                </h3>
                <p className="text-xs md:text-sm font-Edu-nsw mt-1">
                  {edu.Institute}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
