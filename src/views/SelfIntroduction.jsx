import React from "react";
import { Card, Select } from "@ensdomains/thorin";

const categories = [
  "Graphic Designer",
  "Illustrator",
  "Animator",
  "UI/UX",
  "Web Design",
];

// const ExperienceLevel = () => {
//   return (
// <Card>
// <Select
//   options={[
//     { value: "0", label: "Beginner" },
//     { value: "1", label: "Intermediate" },
//     { value: "2", label: "Advanced" },
//   ]}
//   placeholder="Choose Experience..."
//   size="small"
// />
// </Card>
//   );
// };

const SelfIntroduction = () => {
  return (
    <div className="p-10 flex flex-col">
      <h1 className="text-4xl mb-8 text-center">Tell us about Yourself</h1>
      <div className="mx-auto">
        <h2 className="text-2xl mb-4 text-left">
          How would you categorize yourself?
        </h2>

        <div className="flex flex-wrap justify-between p-10 items-start rounded-lg border border-gray-300 mb-4">
          {[
            {
              title: "Graphic Designer",
              image: "./graphic-design.png",
            },
            {
              title: "Illustrator",
              image: "./flag-garland.svg",
            },
            {
              title: "Animator",
              image: "./flash-circle-1.svg",
            },
            {
              title: "UI/UX",
              image: "./interface-ui-layout-app.svg",
            },
            {
              title: "Web Design",
              image: "./page.svg",
            },
          ].map((object, index) => (
            <Card
              key={index}
              className="flex flex-col w-30 h-34 items-center ml-5 rounded-lg"
            >
              <img
                src={`./${object.image}`}
                alt={object.title}
                className="w-24 h-24 rounded-full mb-2"
              />
              <span className="text-center">{object.title}</span>
              <div>
                {" "}
                {/* ExperienceLevel Component */}
                {/* Your Experience Level Component Goes Here */}
                {/* <ExperienceLevel /> */}
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-4">
          <label htmlFor="interest" className="block text-lg mb-2">
            What are you interested in learning more about?
          </label>

          <textarea
            id="interest"
            className="w-full p-2 h-32 border rounded-lg"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-lg mb-2">
            Please provide a brief bio for people to know more about you:
          </label>
          <textarea
            id="bio"
            className="w-full p-2 h-32 border rounded-lg"
          ></textarea>
        </div>
        <div class=" mt-2  rounded-lg mx-auto justify-center items-center text-center">
          <div class=" h-[40px] pl-11 pr-[43px] py-[23px] bg-gradient-to-b from-pink-300 via-purple-400 to-lime-800 rounded-lg justify-center items-center inline-flex">
            <div class="w-[140px] text-center text-white text-base font-semibold font-['Inter'] leading-tight">
              Next Step
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelfIntroduction;
