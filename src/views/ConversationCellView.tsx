import { ReactElement } from "react";
import { Conversation, Message } from "../model/db";
import { shortAddress } from "../util/shortAddress";
import ReactTimeAgo from "react-time-ago";
import { MessageContent } from "./MessageCellView";
import { Card, Profile, Avatar, RecordItem, FlameSVG } from '@ensdomains/thorin'
import { useEnsName, useEnsAvatar } from 'wagmi'

export default function ConversationCellView({
  conversation,
  latestMessage,
}: {
  conversation: Conversation;
  latestMessage: Message | undefined;
}): ReactElement {
  const ensName = useEnsName({ address: conversation.peerAddress });
  const ensAvatar = useEnsAvatar({ address: conversation.peerAddress });
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm" >
      <div className="flex justify-start content-center items-center gap-5">
        <div className="w-10">
          <Profile
            size="small"
            address={conversation.peerAddress}
            avatar={ensAvatar?.data || undefined}
            ensName={ensName?.data || undefined}
          />
        </div>
        <div className="flex-grow flex flex-col ">
          <div className="">
            {ensName?.data || shortAddress(conversation.peerAddress)}
          </div>
          <div className="text-zinc-400 text-xs">
            {latestMessage ? (
              <MessageContent message={latestMessage} />
            ) : "No messages yet"
            }
          </div>
        </div>
        <div className="text-xs text-zinc-400 italic">
          <ReactTimeAgo date={conversation.updatedAt} />
        </div>
      </div>
    </div>
  );
}
