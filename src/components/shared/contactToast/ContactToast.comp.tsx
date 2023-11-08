import {
  BiLogoFacebookSquare,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiMailSend,
} from "react-icons/bi";
import { Link } from "react-router-dom";
const ContactToastComp = () => {
  return (
    <>
      <div className="flex gap-1 bg-slate-200 text-slate-900 py-2 px-6 rounded-full w-fit fixed bottom-4 md:bottom-8 left-6  shadow-xl text-2xl z-50">
        <Link
          to="mailto:mahbubhasan.pro@gmail.com"
          className="p-1 hover:bg-slate-50 rounded-md "
        >
          <BiMailSend />
        </Link>
        <Link
          to="https://facebook.com/mahbubhassantamim"
          target="_blank"
          className="p-1 hover:bg-slate-50 rounded-md "
        >
          <BiLogoLinkedinSquare />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mahbubhasantamim/"
          target="_blank"
          className="p-1 hover:bg-slate-50 rounded-md "
        >
          <BiLogoFacebookSquare />
        </Link>
        <Link
          to="https://www.instagram.com/mahbubhasantamim/"
          target="_blank"
          className="p-1 hover:bg-slate-50 rounded-md "
        >
          <BiLogoInstagram />
        </Link>
        <Link
          to="https://github.com/mahbubhasantamim/"
          target="_blank"
          className="p-1 hover:bg-slate-50 rounded-md "
        >
          <BiLogoGithub />
        </Link>
      </div>
    </>
  );
};

export default ContactToastComp;
