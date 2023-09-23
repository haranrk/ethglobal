import { ReactElement, useState } from "react";
import ConversationListView from "./ConversationListView";
import { useClient, useSetClient } from "../hooks/useClient";
import { shortAddress } from "../util/shortAddress";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useDisconnect } from "wagmi";
import { Avatar, Spinner, Card } from '@ensdomains/thorin'
import { Profile } from '@ensdomains/thorin'
import { useEnsName, useEnsAvatar } from 'wagmi'

export default function HomeView(): ReactElement {
  const client = useClient()!;
  const [copied, setCopied] = useState(false);
  const ensName = useEnsName({ address: client.address });
  const ensAvatar = useEnsAvatar({ address: client.address });

  const copyToClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  function copy() {
    navigator.clipboard.writeText(client.address);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const { disconnectAsync } = useDisconnect();
  const setClient = useSetClient();
  async function logout() {
    await disconnectAsync();
    indexedDB.deleteDatabase("DB");
    localStorage.removeItem("_insecurePrivateKey");
    setClient(null);
  }

  return (
    <div className="p-4 pt-14">
      <Header>
        <div className="flex justify-between">
          <div>
            <div style={{ maxWidth: '50px' }}>
              <Profile
                address={client.address}
                avatar={ensAvatar?.data || undefined}
                ensName={ensName?.data || undefined}
                dropdownItems={[
                  {
                    label: 'Copy Address',
                    color: 'text',
                    onClick: () => copyToClipBoard(client.address),
                  }
                ]}
              // ensName="frontend.ens.eth"
              />
            </div>
            {/* <button className="text-xs text-zinc-600" onClick={copy}>
              {copied ? "Copied Address!" : "Copy Address"}
            </button> */}
          </div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </Header>
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
