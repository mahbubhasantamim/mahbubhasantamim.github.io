import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import SkillCardComp from "./SkillCard.comp";

const SkillComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Languages & frameworks</SectionHeadingComp>

        {/* Languages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
          <SkillCardComp cardTitle="Programming languages">
            <img src="./icon/javascript-original.svg" alt="" className="w-8" />
          </SkillCardComp>
          <SkillCardComp cardTitle="Frontend">
            <img src="./icon/html5-original-wordmark.svg" className="w-8" />
            <img src="./icon/css3-original-wordmark.svg" className="w-8" />
            <img src="./icon/tailwind-original.svg" className="w-8" />
            <img src="./icon/bootstrap-plain-wordmark.svg" className="w-8" />
            <img src="./icon/react-original-wordmark.svg" className="w-8" />
          </SkillCardComp>
          <SkillCardComp cardTitle="Backend">
            <img src="./icon/nodejs-original-wordmark.svg" className="w-8" />
            <img src="./icon/express-original-wordmark.svg" className="w-8" />
            <img src="./icon/mongodb-original-wordmark.svg" className="w-8" />
          </SkillCardComp>
          <SkillCardComp cardTitle="VCS">
            <img src="./icon/git-original.svg" className="w-8" />
            <img src="./icon/github-mark.svg" className="w-8" />
          </SkillCardComp>
          <SkillCardComp cardTitle="UI/UX">
            <img src="./icon/AI-original.svg" className="w-8" />
            <img src="./icon/figma-original.svg" className="w-8" />
          </SkillCardComp>
          <SkillCardComp cardTitle="CMS">
            <img src="./icon/Wordpress-Logo.svg" className="w-8" />
            <img src="./icon/Elementor_icon.svg" className="w-8" />
          </SkillCardComp>
        </div>
      </div>
    </>
  );
};

export default SkillComp;
