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
        "Dive into the world of MERN development with our cutting-edge services. MERN, which stands for MongoDB, Express.js, React.js, and Node.js, forms the foundation of our dynamic and efficient web solutions. Harness the power of these technologies to create high-performance, scalable, and interactive applications tailored to your specific requirements. Elevate your digital presence with our MERN development expertise – where innovation meets seamless functionality for a superior user experience. Embrace the future of web development with our MERN development services.",
    },
    {
      cardLink: "",
      imgLink: frontendImg,
      serviceTitle: "React frontend development",
      serviceDesc:
        "Elevate your digital presence with our React Frontend Development Services. We specialize in crafting high-performance, interactive, and visually stunning user interfaces that captivate and engage your audience. Our experienced team of React developers leverages the power of component-based architecture to create scalable and maintainable solutions tailored to your unique requirements.",
    },
    {
      cardLink: "",
      imgLink: backendImg,
      serviceTitle: "Backend development",
      serviceDesc:
        "Empower your digital ecosystem with our Backend Development Services. We specialize in crafting scalable, secure, and high-performance server-side solutions. From expert database management to seamless API development, our team ensures a reliable backend foundation for your web applications. Let us optimize your data flow, enhance security, and drive efficiency, ensuring a seamless experience for your users. Elevate your backend capabilities with our tailored development expertise.",
    },
    {
      cardLink: "",
      imgLink: wordpressImg,
      serviceTitle: "WordPress website",
      serviceDesc:
        "Transform your online presence effortlessly with our WordPress Development Services. We specialize in leveraging the power of WordPress to create visually stunning, user-friendly, and highly functional websites.",
    },
    {
      cardLink: "",
      imgLink: htmlConImg,
      serviceTitle: "HTML Conversion",
      serviceDesc:
        "Elevate your web design with our HTML and Tailwind CSS Integration Services. We seamlessly merge clean, semantic HTML code with the power of Tailwind CSS, offering a streamlined development process and unparalleled styling flexibility. Benefit from responsive design, rapid development, and a consistent, visually appealing user interface. Let's bring efficiency and modern aesthetics to your web project.",
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
