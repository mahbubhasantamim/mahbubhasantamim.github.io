import SectionHeadingComp from "@/components/shared/sectionHeading/SectionHeading.comp";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { ZodType, z } from "zod";
import getInTouchImg from "../../../../../assets/img/getintouch.svg";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

export const ContactComp = () => {
  const contactFormSchema: ZodType<ContactFormType> = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.string().email({ message: "Please enter a valid email address!" }),
    message: z.string().min(1, "Message is required!"),
  });

  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<ContactFormType>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = (data: ContactFormType) => {
    console.log(data);
    const SERVICE_ID = "service_safs0ty";
    const TEMPLETE_ID = "template_g7qxy4w";
    const PUBLICE_KEY = "VTtrUE043M1Y6MaXF";
    emailjs.send(SERVICE_ID, TEMPLETE_ID, data, PUBLICE_KEY).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
              <form onSubmit={handleSubmit(onSubmit)} className="text-xs">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="lg:w-1/2">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("name")}
                      className={
                        errors.name
                          ? `w-full p-2 rounded-md shadow-inner border border-red-500 outline-red-500 `
                          : `w-full p-2 rounded-md shadow-inner`
                      }
                    />
                    <span className="text-xs text-red-500">
                      {errors.name?.message}
                    </span>
                  </div>

                  <div className="lg:w-1/2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email")}
                      className={
                        errors.email
                          ? `w-full p-2 rounded-md shadow-inner border border-red-500 outline-red-500 `
                          : `w-full p-2 rounded-md shadow-inner`
                      }
                    />
                    <span className="text-xs text-red-500">
                      {errors.email?.message}
                    </span>
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    {...register("message")}
                    className={
                      errors.message
                        ? `w-full h-20 md:h-28 lg:h-36 mt-3 p-2 rounded-md shadow-inner border border-red-500 outline-red-500`
                        : `w-full h-20 md:h-28 lg:h-36 mt-3 p-2 rounded-md shadow-inner`
                    }
                  ></textarea>
                  <span className="text-xs text-red-500">
                    {errors.message?.message}
                  </span>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full text-xs bg-slate-700 text-slate-50 py-2 px-4 rounded-md shadow-lg hover:bg-slate-600"
                  >
                    {isSubmitting ? (
                      <div className="flex justify-center text-lg">
                        <AiOutlineLoading className="animate-spin" />
                      </div>
                    ) : (
                      "Send message"
                    )}
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
