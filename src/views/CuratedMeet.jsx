import React from "react";

const CuratedMeet = () => {
  return (
    <div className="p-10 flex flex-col">
      <h1 className="text-4xl mb-6 text-center" style={{ marginTop: "100px" }}>
        Your curated matchup:
      </h1>
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-around">
          <div className="flex items-center justify-around">
            <img
              className="w-12 h-12"
              src="https://via.placeholder.com/48x48"
              alt="Placeholder"
            />

            <div className="userInfo bg-zinc-100 rounded-lg p-3.5 inline-flex justify-start items-start">
              <div className="userHandle text-zinc-800 text-sm font-normal font-space-grotesk">
                @cemal_cetin
              </div>
            </div>

            <div className="userRole bg-blue-400 rounded-lg p-3.5 inline-flex justify-start items-start">
              <div className="roleText text-white text-sm font-bold font-space-grotesk">
                Web Designer
              </div>
            </div>

            <button
              type="submit"
              className="h-[40px] pl-11 pr-[43px] py-[23px] ml-2 bg-gradient-to-b from-pink-300 via-purple-400 to-lime-800 rounded-lg justify-center items-center inline-flex"
            >
              <div className="w-[80px] text-center text-white text-base font-semibold font-['Inter'] leading-tight">
                Next Step
              </div>
            </button>
          </div>
          <div className="p-6 mt-6 w-[637px]  bg-neutral-50 rounded-[20px] border border-neutral-300 mx-auto my-auto">
            Bio: My spark started when getting in touch with design thinking. My
            involvement in innovation activities makes me realize that, instead
            of optimizing capital allocation, I want to design and manage
            digital products that fulfill human needs and impact stakeholders on
            a large scale. The role’s combination of analysis, design,
            technology, and communication resonates with me.
          </div>
          <div className="mt-4 w-[227px] h-[63px] pl-11 pr-[43px] pt-[11px] pb-2.5 bg-neutral-500 rounded-lg justify-center items-center inline-flex">
            <div className="w-[140px] text-center text-white text-base font-semibold font-['Inter'] leading-tight">
              <span style={{ display: "block" }}>Regenerate</span> (0 remaining)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedMeet;
