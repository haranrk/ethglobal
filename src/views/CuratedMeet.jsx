import { Tag, Button, Profile, Heading, Spinner } from "@ensdomains/thorin";
import { startConversation } from "../model/conversations";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClient } from "../hooks/useClient";
import { useMyENSResolver } from "../hooks/ensResolving";
import { useUser } from "../hooks/useUser";

const CuratedMeet = () => {
  const client = useClient();
  const [regenerationCount, setRegenerationCount] = useState(3);
  const navigate = useNavigate();
  const [address, setAddress] = useState(null);
  const matchedUser = useUser(address);
  const [ensName, ensAvatar] = useMyENSResolver(address);

  async function startChatting() {
    console.log(client, client.conv, matchedUser.wallet_address);
    const conversation = await startConversation(
      client,
      matchedUser.wallet_address
    );
    navigate(`/c/${conversation.topic}`);
  }

  async function getMatch() {
    // const response = await axios.get(`${base_url}/user/${address}`);
    // console.log(response.data);
    setAddress("0xf9a3BB070c1f9b3186A547DeD991BeD04a289C5B");
  }
  useEffect(() => {
    getMatch();
  }, []);
  return (
    <div>
      {matchedUser ? (
        <div className="p-10 flex flex-col">
          <Heading
            className="text-4xl mb-6 text-center"
            style={{ marginTop: "100px" }}
          >
            Your curated matchup
          </Heading>
          <iv className="flex gap-5 flex-col items-center justify-around">
            <div className="flex items-center justify-around">
              <Profile
                address={matchedUser?.wallet_address}
                avatar={ensAvatar}
                ensName={ensName}
              ></Profile>
              <Tag>{matchedUser.category}</Tag>
              <div className="userRole bg-blue-400 rounded-lg p-3.5 inline-flex justify-start items-start">
                <div className="roleText text-white text-sm font-bold font-space-grotesk">
                  {matchedUser.category}
                </div>
              </div>
            </div>
            <div className="p-6 w-[637px]  bg-neutral-50 rounded-[20px] border border-neutral-300 mx-auto my-auto">
              {matchedUser.bio}
            </div>
            <div className="flex gap-5">
              <Button
                colorStyle="greyPrimary"
                count={regenerationCount}
                disabled={regenerationCount <= 0}
                onClick={() => {
                  getMatch();
                  setRegenerationCount((x) => x - 1);
                }}
              >
                {regenerationCount <= 0
                  ? "You are out of refreshes for one week"
                  : "Regenerate"}
              </Button>
              <Button colorStyle="greenPrimary" onClick={startChatting}>
                Start chatting
              </Button>
            </div>
          </iv>
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
