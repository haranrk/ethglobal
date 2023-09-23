import { PropsWithChildren, ReactElement } from "react";
import { Profile } from '@ensdomains/thorin'
import Header from "./Header";
import { useEnsName, useEnsAvatar } from 'wagmi'
import { useDisconnect } from "wagmi";
import { useClient, useSetClient } from "../hooks/useClient";


export default function Navbarx({
  children,
}: PropsWithChildren<unknown>): ReactElement {

  const client = useClient()!;
  const ensName = useEnsName({ address: client.address });
  const ensAvatar = useEnsAvatar({ address: client.address });
  const { disconnectAsync } = useDisconnect();
  const setClient = useSetClient();

  const copyToClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  async function logout() {
    await disconnectAsync();
    indexedDB.deleteDatabase("DB");
    localStorage.removeItem("_insecurePrivateKey");
    setClient(null);
  }
  return (
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
  )
}