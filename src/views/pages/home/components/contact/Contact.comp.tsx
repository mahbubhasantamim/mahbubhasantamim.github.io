import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import getInTouchImg from "../../../../../assets/img/getintouch.svg";

export const ContactComp = () => {
  return (
    <>
      <div className="px-6 md:px-16 pt-6 md:pt-10">
        <SectionHeadingComp>Get in touch</SectionHeadingComp>
        <p className="text-center font-Edu-nsw">
          I am happy to talk to you! Just complete the form.
        </p>

        <div className="py-6">
          <div className="flex bg-slate-200 rounded-md shadow-lg">
            <div className="w-2/6 px-2 lg:px-6 bg-slate-500 flex justify-center items-center rounded-s-md">
              <img src={getInTouchImg} alt="" className="w-full" />
            </div>
            <div className="w-4/6 py-6 md:py-10 px-4 md:px-10">
              <form className="text-xs">
                <div className="flex flex-col lg:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="lg:w-1/2 p-2 rounded-md shadow-inner"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="lg:w-1/2 p-2 rounded-md shadow-inner"
                  />
                </div>
                <div>
                  <textarea
                    name="msg"
                    placeholder="Your message"
                    className="w-full h-20 md:h-28 lg:h-36 mt-3 p-2 rounded-md shadow-inner"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="mt-2 w-full text-xs bg-slate-700 text-slate-50 py-2 px-4 rounded-md shadow-lg hover:bg-slate-600"
                  >
                    Send messge
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
