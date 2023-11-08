import ContactToastComp from "@/components/shared/contactToast/ContactToast.comp";
import AboutComp from "./components/about/About.comp";
import HeaderComp from "./components/header/Header.comp";
import ServiceComp from "./components/service/Service.comp";
import SkillComp from "./components/skill/Skill.comp";

const HomePage = () => {
  return (
    <>
      <div className="h-3 animate-pulse bg-gradient-to-r from-pink-500 to-slate-400 w-full sticky top-0 z-10"></div>

      <div className="font-Fira-Sans">
        <ContactToastComp />
        <HeaderComp />
        <AboutComp />
        <SkillComp />
        <ServiceComp />
      </div>
    </>
  );
};

export default HomePage;
