import { ReactElement, useState } from "react";
import ConversationListView from "./ConversationListView";
import { useClient, useSetClient } from "../hooks/useClient";
import { shortAddress } from "../util/shortAddress";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useDisconnect } from "wagmi";
import { Avatar, Spinner, Card, Button, Heading } from '@ensdomains/thorin'
import { Profile } from '@ensdomains/thorin'
import { useEnsName, useEnsAvatar } from 'wagmi'

export default function HomeView(): ReactElement {
  const client = useClient()!;
  const [copied, setCopied] = useState(false);
  const ensName = useEnsName({ address: client.address });
  const ensAvatar = useEnsAvatar({ address: client.address });


  return (
    <div className="p-5 pt-6">
      <div>
        <div className="p-3 flex justify-between items-center">
          <Heading>Conversations</Heading>
          <Link to="/new">
            <Button shape="circle">
              +
            </Button>
          </Link>
        </div>
        <ConversationListView />
      </div>
    </div>
  );
}
