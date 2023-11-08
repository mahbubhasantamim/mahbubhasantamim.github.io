import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import abimgMob from "../../../../../assets/img/mahbub hasan tamim-mob.png";
import abimg from "../../../../../assets/img/tamim-fearwell.png";

const AboutComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-0 pt-10">
        <SectionHeadingComp>About me</SectionHeadingComp>

        <div className="md:flex lg:w-4/6 mx-auto my-6 bg-gradient-to-br from-slate-100 via-purple-100 to-pink-50 shadow-md hover:shadow-lg rounded-md">
          <div className="md:w-2/6 md:order-last pt-6 md:pt-0">
            <img
              src={abimg}
              alt=""
              className="w-60 mx-auto md:float-right rounded-e-md hidden md:block"
            />
            <img
              src={abimgMob}
              alt=""
              className="w-40 mx-auto md:float-right rounded-full md:hidden "
            />
          </div>
          <div className="md:w-4/6 ">
            <p className="p-8 lg:p-10 text-sm font-Edu-nsw">
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
