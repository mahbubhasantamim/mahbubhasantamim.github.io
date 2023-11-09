import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import abimgMob from "../../../../../assets/img/mahbub hasan tamim-mob.png";
import abimg from "../../../../../assets/img/tamim-fearwell.png";

const AboutComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 pt-10">
        <SectionHeadingComp>About me</SectionHeadingComp>

        <div className="md:flex  mx-auto my-6 bg-slate-50 shadow-md hover:shadow-lg rounded-md">
          <div className="md:w-2/6 md:order-last pt-6 md:pt-0">
            <img
              src={abimg}
              alt=""
              className="w-60 mx-auto md:float-right rounded-e-md hidden md:block"
            />
            <div className="flex justify-center md:hidden">
              <div>
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500 via-sky-800 to-purple-600 opacity-40 border-2 border-dotted  animate-spin"></div>
                <img
                  src={abimgMob}
                  alt=""
                  className="w-40 mx-auto md:float-right rounded-full  p-2 relative "
                />
              </div>
            </div>
          </div>
          <div className="md:w-4/6 ">
            <p className="p-8 lg:p-10 text-sm lg:text-base font-Edu-nsw">
              Hello, I'm Mahbub Hasan, a passionate Full-stack Web Developer
              dedicated to crafting exceptional digital experiences. With a
              strong foundation in both front-end and back-end technologies, I
              bring creativity, technical expertise, and a keen eye for detail
              to every project I undertake.
              <br /> I believe in the power of clean code, elegant design, and
              seamless user experiences. Every line of code I write is aimed at
              creating websites and applications that not only look great but
              also perform exceptionally well. I am committed to staying updated
              with the latest industry trends and technologies, ensuring that my
              solutions are always at the forefront of innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
