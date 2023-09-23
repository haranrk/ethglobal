import { ReactElement } from "react";
import { Conversation, Message } from "../model/db";
import { shortAddress } from "../util/shortAddress";
import ReactTimeAgo from "react-time-ago";
import { MessageContent } from "./MessageCellView";
import { Profile, Avatar, RecordItem, FlameSVG } from '@ensdomains/thorin'
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
    <div className="mt-2 p-2 border dark:border-zinc-600 rounded">
      <div className="flex items-center justify-between space-x-2">
        <div className="hover:underline">
          <div className="flex flex-row">
            <div className="w-10">
              <Profile
                size="small"
                address={conversation.peerAddress}
                avatar={ensAvatar?.data || undefined}
                ensName={ensName?.data || undefined}
              />
            </div>
            {/* <RecordItem icon={<FlameSVG />} inline value="0xb794f5ea0ba39494ce839613fffba74279579268">
              0xb794...9268
            </RecordItem> */}
            <span className="text-blue-700 dark:text-blue-500">
              {ensName?.data || shortAddress(conversation.peerAddress)}
            </span>{" "}
          </div>
        </div>
        <div className="text-xs text-zinc-500">
          <ReactTimeAgo date={conversation.updatedAt} />
        </div>
      </div>
      {latestMessage ? (
        <div className="block text-zinc-500">
          <MessageContent message={latestMessage} />
        </div>
      ) : (
        <div className="block text-zinc-500">No messages yet.</div>
      )}
    </div>
  );
}
