import { BiLogoGithub, BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
export const FooterComp = () => {
  return (
    <>
      <div className="bg-slate-900 text-slate-200 py-6">
        <div className="flex justify-center divide-x text-xs mb-1">
          <div className="px-4">
            <Link
              to="mailto:mahbubhasan.pro@gmail.com"
              className="flex items-center gap-1 hover:text-white"
            >
              <div className="text-xl">
                <BiMailSend />
              </div>
              <p>mahbubhasan.pro@gmail.com</p>
            </Link>
          </div>
          <div className="px-4">
            <Link
              to="https://github.com/mahbubhasantamim/"
              target="_blank"
              className="flex items-center gap-1 hover:text-white"
            >
              <div className="text-xl">
                <BiLogoGithub />
              </div>
              <p>mahbubhasantamim</p>
            </Link>
          </div>
        </div>

        <p className="text-center font-Edu-nsw text-xs">
          &copy; 2023{" "}
          <Link
            to="https://github.com/mahbubhasantamim/"
            target="_blank"
            className="hover:text-white"
          >
            Mahbub Hasan
          </Link>
          . All rights reserved.
        </p>
      </div>
    </>
  );
};
