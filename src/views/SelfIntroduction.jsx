import React, { useState } from "react";
import { Card, Select } from "@ensdomains/thorin";
import { useClient } from "../hooks/useClient";

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

const RoleSelectComponent = (props) => {
  const { selectedRole, setSelectedRole } = props;
  const handleCardClick = (role) => {
    setSelectedRole(role);
  };

  return (
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
        <div
          key={index}
          onClick={() => handleCardClick(object.title)}
          className={`flex flex-col w-30 h-34 items-center ml-5 rounded-lg card ${
            selectedRole === object.title ? "border border-indigo-600 p-3" : ""
          }`}
        >
          <img
            src={`./${object.image}`}
            alt={object.title}
            className="w-24 h-24 rounded-full mb-2"
          />
          <span className="text-center">{object.title}</span>
          <div>
            {/* Your Experience Level Component Goes Here */}
            {/* <ExperienceLevel /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

const SelfIntroduction = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [interest, setInterest] = useState([]);
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = useClient();

    const formData = {
      category: selectedRole,
      preferences: interest,
      bio,
      walletAddress: client.address,
      xmtp_enabled: true,
    };

    try {
      const response = await fetch("localhost:5000/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully", await response.json());
      } else {
        console.log("Error submitting form", response.status);
      }
    } catch (error) {
      console.log("Network error", error);
    }
  };

  return (
    <form className="p-10 flex flex-col" onSubmit={handleSubmit}>
      <h1 className="text-4xl mb-8 text-center">Tell us about Yourself</h1>
      <div className="mx-auto">
        <h2 className="text-2xl mb-4 text-left">
          How would you categorize yourself?
        </h2>
        <div className="flex flex-wrap justify-between p-10 items-start rounded-lg border border-gray-300 mb-4">
          <RoleSelectComponent
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interest" className="block text-lg mb-2">
            What are you interested in learning more about?
          </label>
          <div id="interest" className="flex flex-wrap justify-around">
            {[
              "AI",
              "UX Design",
              "Front-end Development",
              "Back-end Development",
              "Other",
            ].map((item, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={item}
                  checked={interest.includes(item)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInterest((prevInterest) =>
                      prevInterest.includes(value)
                        ? prevInterest.filter((i) => i !== value)
                        : [...prevInterest, value]
                    );
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-lg mb-2">
            Please provide a brief bio for people to know more about you:
          </label>
          <textarea
            id="bio"
            className="w-full p-2 h-32 border rounded-lg"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-2 rounded-lg mx-auto justify-center items-center text-center">
          <button
            type="submit"
            className="h-[40px] pl-11 pr-[43px] py-[23px] bg-gradient-to-b from-pink-300 via-purple-400 to-lime-800 rounded-lg justify-center items-center inline-flex"
          >
            <div className="w-[140px] text-center text-white text-base font-semibold font-['Inter'] leading-tight">
              Next Step
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SelfIntroduction;
