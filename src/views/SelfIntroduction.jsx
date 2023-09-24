import React from "react";
import { Card, Select } from "@ensdomains/thorin";

const categories = [
  "Graphic Designer",
  "Illustrator",
  "Animator",
  "UI/UX",
  "Web Design",
];

const ExperienceLevel = () => {
  return (
    <Card>
      <Select
        autocomplete
        options={[
          { value: "0", label: "Beginner" },
          { value: "1", label: "Intermediate" },
          { value: "2", label: "Advanced" },
        ]}
        placeholder="Select an option..."
        tabIndex="2"
      />
    </Card>
  );
};

const SelfIntroduction = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl mb-4 text-center">Tell us about Yourself</h1>
      <h2 className="text-2xl mb-4 text-left">
        How would you categorize yourself?
      </h2>

      <div className="flex flex-wrap justify-start items-start rounded-lg bg-gray-100 pl-4 mb-4">
        {[
          "Graphic Designer",
          "Illustrator",
          "Animator",
          "UI/UX",
          "Web Design",
        ].map((title, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2 p-2 w-32 h-64 rounded-lg border border-gray-300"
          >
            <img
              src={`path/to/${title}.jpg`}
              alt={title}
              className="w-24 h-24 rounded-full mb-2"
            />
            <span className="text-center">{title}</span>
            <div>
              {" "}
              {/* ExperienceLevel Component */}
              {/* Your Experience Level Component Goes Here */}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label htmlFor="interest" className="block text-lg mb-2">
          What are you interested in learning more about?
        </label>
        <input
          id="interest"
          type="text"
          className="w-full p-2 border rounded-lg"
        />
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
    </div>
  );
};

export default SelfIntroduction;
