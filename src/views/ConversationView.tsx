import { ReactElement, useEffect, useState } from "react";
import { Conversation, Message } from "../model/db";
import { useMessages } from "../hooks/useMessages";
import MessageComposerView from "./MessageComposerView";
import MessageCellView from "./MessageCellView";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useLiveConversation } from "../hooks/useLiveConversation";
import ConversationSettingsView from "./ConversationSettingsView";
import { ContentTypeId } from "@xmtp/xmtp-js";
import { ContentTypeReaction } from "@xmtp/content-type-reaction";
import { useReadReceipts } from "../hooks/useReadReceipts";
import { useEnsName, useEnsAvatar } from 'wagmi'
import { Profile } from '@ensdomains/thorin'

const appearsInMessageList = (message: Message): boolean => {
  if (ContentTypeReaction.sameAs(message.contentType as ContentTypeId)) {
    return false;
  }

  return true;
};

export default function ConversationView({
  conversation,
}: {
  conversation: Conversation;
}): ReactElement {
  const liveConversation = useLiveConversation(conversation);

  const messages = useMessages(conversation);

  const showReadReceipt = useReadReceipts(conversation);

  const [isShowingSettings, setIsShowingSettings] = useState(false);
  const ensName = useEnsName({ address: conversation.peerAddress });
  const ensAvatar = useEnsAvatar({ address: conversation.peerAddress });

  useEffect(() => {
    window.scrollTo({ top: 100000, behavior: "smooth" });
  }, [messages?.length]);

  return (
    <div className="p-4 pb-20 pt-14">
      <Header>
        <div className="flex justify-between font-bold">
          <Profile
            address={conversation.peerAddress}
            avatar={ensAvatar?.data || undefined}
            ensName={ensName?.data || undefined}
            dropdownItems={[
              {
                label: 'Copy Address',
                color: 'text',
                onClick: () => { alert("Hi") },
              }
            ]}
          />
          {/* <span className="flex-grow">
            {liveConversation?.title || conversation.peerAddress}
          </span> */}
          <div className="space-x-4">
            <button
              className="inline-block space-x-1 text-zinc-600"
              onClick={() => {
                setIsShowingSettings(!isShowingSettings);
              }}
            >
              <Cog6ToothIcon className="h-4 inline-block align-top" />
              <span>Settings</span>
            </button>
            <Link className="text-blue-700" to="/">
              Go Back
            </Link>
          </div>
        </div>
        {isShowingSettings && (
          <ConversationSettingsView
            conversation={conversation}
            dismiss={() => setIsShowingSettings(false)}
          />
        )}
      </Header>

      <div className="grid grid-cols-3">
        <div>
          <div className="mt-10">
            {messages?.length == 0 && <p>No messages yet.</p>}
            {messages ? (
              messages.reduce((acc: ReactElement[], message: Message, index) => {
                const showRead = showReadReceipt && index === messages.length - 1;
                if (appearsInMessageList(message)) {
                  acc.push(
                    <MessageCellView
                      key={message.id}
                      message={message}
                      readReceiptText={showRead ? "Read" : undefined}
                    />
                  );
                }

                return acc;
              }, [] as ReactElement[])
            ) : (
              <span>Could not load messages</span>
            )}
          </div>
          <MessageComposerView conversation={conversation} />
        </div>
        <div>Hellow</div>
      </div>
    </div>
  );
}
