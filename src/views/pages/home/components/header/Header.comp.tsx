import Navbar from "@/components/shared/navbar/Navbar";
import { Link } from "react-router-dom";
const HeaderComp = () => {
  return (
    <>
      <header className="py-4 md:px-16 px-6 bg-gradient-to-tr from-slate-900 from-10%  to-slate-950 text-slate-200">
        <Navbar />

        <div className="">
          <div className="py-20 lg:py-28">
            <h2 className="font-Edu-nsw">Hello, I'm</h2>
            <h1 className="text-4xl font-semibold text-purple-300">
              Mahbub Hasan Tamim
            </h1>
            <h3 className="font-Edu-nsw text-white">
              Full Stack Web Developer
            </h3>

            <div className="flex gap-2 items-center mt-8">
              <Link
                to="https://www.fiverr.com/mahbub104558"
                className="border py-2 px-3 rounded-sm text-xs bg-purple-100 text-slate-900 hover:bg-transparent hover:text-white"
              >
                Hire me
              </Link>
              <Link
                to="/resume"
                className="border py-2 px-3 rounded-sm text-xs hover:text-white"
              >
                See Resume
              </Link>
            </div>
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComp;
