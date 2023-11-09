import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import backendImg from "../../../../../assets/img/service-img/Backend-development.png";
import fullstackImg from "../../../../../assets/img/service-img/Fullstack-devleopment.png";
import frontendImg from "../../../../../assets/img/service-img/frontend-development.png";
import htmlConImg from "../../../../../assets/img/service-img/html-conversion.png";
import wordpressImg from "../../../../../assets/img/service-img/wordpress-website.png";
import { ServiceCardComp } from "./ServiceCard.comp";

const ServiceComp = () => {
  const cardArr = [
    {
      cardLink: "",
      imgLink: fullstackImg,
      serviceTitle: "Full stack web application",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, voluptatem laboriosam cum pariatur perspiciatis provident eos veniam officia molestias maxime fugiat! Architecto laudantium vitae fugiat quo voluptatem accusamus blanditiis?",
    },
    {
      cardLink: "",
      imgLink: frontendImg,
      serviceTitle: "React frontend development",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, voluptatem laboriosam cum pariatur perspiciatis provident eos veniam officia molestias maxime fugiat! Architecto laudantium",
    },
    {
      cardLink: "",
      imgLink: backendImg,
      serviceTitle: "Backend development",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, voluptatem laboriosam cum pariatur perspiciatis provident eos veniam officia molestias maxime fugiat! Architecto laudantium",
    },
    {
      cardLink: "",
      imgLink: wordpressImg,
      serviceTitle: "WordPress website",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, voluptatem laboriosam cum pariatur perspiciatis provident eos veniam officia molestias maxime fugiat! Architecto laudantium",
    },
    {
      cardLink: "",
      imgLink: htmlConImg,
      serviceTitle: "HTML Conversion",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, voluptatem laboriosam cum pariatur perspiciatis provident eos veniam officia molestias maxime fugiat! Architecto laudantium",
    },
    {
      cardLink: "",
      imgLink: "",
      serviceTitle: "",
      serviceDesc: "",
    },
  ];
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Services</SectionHeadingComp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 py-6">
          {cardArr.map((cardObj, index) => (
            <ServiceCardComp key={index} cardObj={cardObj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceComp;
