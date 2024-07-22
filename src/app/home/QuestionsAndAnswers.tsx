import { Link } from "components/documentation";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const QAS = () => {
  const faqData: FAQItem[] = [
    {
      question:
        "What is a resume builder? Why is a resume builder better than a resume template doc?",
      answer:
        "There are two ways to create a resume today. One option is to use a resume template, such as an office/google doc, and customize it according to your needs. The other option is to use a resume builder, an online tool that allows you to input your information and automatically generates a resume for you. Unlike other resume builders that target a global audience and offer many customization options, it offers only the core sections, e.g. profile, work experience, education, and skills, while omitting unnecessary sections like references. Additionally, Preamble Resume only offers a top-down single-column resume design as opposed to a two-column design, because single-column design works best for ATS.",
    },
    {
      question: "How do I create an effective resume?",
      answer:
        "Creating an effective resume involves highlighting your skills, experience, and achievements in a clear and concise manner. Use bullet points to make your resume easy to read, and tailor it to the specific job you're applying for by including relevant keywords and accomplishments.",
    },
    {
      question: "What sections should be included in a resume?",
      answer:
        "A resume should generally include the following sections: Contact Information, Summary or Objective, Work Experience, Education, Skills, and optionally, Certifications, Awards, and References.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleMenu = (index: number) => {
    setVisibleAnswers((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="px-4 py-12 lg:container md:px-6 md:py-12 lg:mx-auto lg:py-12">
      <h1 className="text-center  text-3xl font-bold leading-7 text-gray-800 dark:text-black lg:text-4xl lg:leading-9">
        FAQ's
      </h1>

      <div className="mx-auto mt-8 w-full bg-gray-100 px-4 py-6 dark:bg-gray-300 md:mt-10 md:p-6 lg:mt-12 lg:w-8/12 lg:px-6 lg:py-7 rounded-xl">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:text-left">
            <h2 className="mb-4 text-xl font-medium leading-5 text-gray-300 dark:text-black lg:mb-2">
              Questions
            </h2>
            <p className="mx-auto w-11/12 text-sm font-normal leading-5 text-black md:ml-0 md:w-8/12">
              If you don’t find your answer, please contact us or leave a
              message, we’ll be more than happy to assist you.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex w-full items-center justify-between rounded-md bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:justify-center">
              <input
                className="bg-white focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full lg:w-8/12">
        {faqData.map((item, index) => (
          <div key={index} className="mb-8">
            <hr className="my-8 w-full md:mb-8 md:mt-12 lg:mt-10" />
            <div className="w-full md:px-6">
              <div
                id="mainHeading"
                className="flex w-full items-center justify-between"
              >
                <div>
                  <p
                    className={`flex items-center justify-center text-base font-medium leading-6 text-gray-800 dark:text-black md:leading-4 ${
                      visibleAnswers[index] ? "font-semibold" : ""
                    }`}
                  >
                    <span className="mr-4 text-lg font-semibold leading-6 text-gray-800 dark:text-black md:text-xl md:leading-5 lg:mr-6 lg:text-2xl lg:leading-4">
                      Q{index + 1}.
                    </span>
                    {item.question}
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  data-menu
                  onClick={() => toggleMenu(index)}
                >
                  <img
                    className={`transform dark:hidden ${
                      visibleAnswers[index] ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    className={`hidden transform dark:block bg-gray-300 rounded-full ${
                      visibleAnswers[index] ? "rotate-180" : ""
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggler"
                  />
                </button>
              </div>

              <div
                id="menu"
                className={`mt-6 w-full ${
                  visibleAnswers[index] ? "" : "hidden"
                }`}
              >
                <p className="text-base font-normal leading-6 text-gray-600 dark:text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
        <hr className="my-8 w-full lg:mt-10" />
      </div>
    </div>
  );
};
