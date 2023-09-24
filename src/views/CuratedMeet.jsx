import { Profile, Spinner } from "@ensdomains/thorin";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useClient } from "wagmi";
import { useEnsName, useEnsAvatar } from "wagmi";

const CuratedMeet = () => {
  const client = useClient();
  const base_url = "http://127.0.0.1:5000";
  const [matchedUser, setMatchedUser] = useState(undefined);
  const ensName = useEnsName({ address: matchedUser?.wallet_address });
  const ensAvatar = useEnsAvatar({ address: matchedUser?.wallet_address });

  useEffect(() => {
    const getMatch = async () => {
      const response = await axios.get(
        `${base_url}/user/0xB998CA05293F1f2835906B3D8B1DC8c37aFb63D0`
      );
      console.log(response.data);
      setMatchedUser(response.data);
    };
    getMatch();
  }, []);
  return (
    <div>
      {matchedUser ? (
        <div className="p-10 flex flex-col">
          <h1
            className="text-4xl mb-6 text-center"
            style={{ marginTop: "100px" }}
          >
            Your curated matchup:
          </h1>
          <div className="mx-auto">
            <div className="flex flex-col items-center justify-around">
              <div className="flex items-center justify-around">
                <Profile
                  address={matchedUser?.wallet_address}
                  avatar={ensAvatar?.data || undefined}
                  ensName={ensName?.data || undefined}
                ></Profile>
                <div className="userRole bg-blue-400 rounded-lg p-3.5 inline-flex justify-start items-start">
                  <div className="roleText text-white text-sm font-bold font-space-grotesk">
                    {matchedUser.category}
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
                {matchedUser.bio}
              </div>
              <div className="mt-4 w-[227px] h-[63px] pl-11 pr-[43px] pt-[11px] pb-2.5 bg-neutral-500 rounded-lg justify-center items-center inline-flex">
                <div className="w-[140px] text-center text-white text-base font-semibold font-['Inter'] leading-tight">
                  <span style={{ display: "block" }}>Regenerate</span> (0
                  remaining)
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          Loading User <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default CuratedMeet;
