import { ReactElement, useState } from "react";
import ConversationListView from "./ConversationListView";
import { useClient, useSetClient } from "../hooks/useClient";
import { shortAddress } from "../util/shortAddress";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbarx from "../components/Navbarx";
import { useDisconnect } from "wagmi";
import { Avatar, Spinner, Card } from '@ensdomains/thorin'
import { Profile } from '@ensdomains/thorin'
import { useEnsName, useEnsAvatar } from 'wagmi'

export default function HomeView(): ReactElement {
  const client = useClient()!;
  const [copied, setCopied] = useState(false);
  const ensName = useEnsName({ address: client.address });
  const ensAvatar = useEnsAvatar({ address: client.address });


  return (
    <div className="p-4 pt-14">
      <Navbarx></Navbarx>
      <div className="mt-10">
        <small className="flex justify-between">
          <span>Here are your conversations:</span>
          <Link to="new" className="text-blue-700">
            Make a new one
          </Link>
        </small>
        <ConversationListView />
      </div>
    </div>
  );
}
