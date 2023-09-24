
import { Profile, Button } from '@ensdomains/thorin'
import Header from "./Header";
import { useEnsName, useEnsAvatar } from 'wagmi'
import { useClient, useSetClient } from "../hooks/useClient";
import { PropsWithChildren, ReactElement } from "react";
import { useDisconnect } from "wagmi";
import { useNavigate } from 'react-router-dom';


export default function LoggedInProfile({
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
  const navigate = useNavigate()
  async function logout() {
    await disconnectAsync();
    indexedDB.deleteDatabase("DB");
    localStorage.removeItem("_insecurePrivateKey");

    navigate("/");
    setClient(null);
  }
  return (
    <Profile
      className="shadow-sm ring ring-black"
      address={client.address}
      avatar={ensAvatar?.data || undefined}
      ensName={ensName?.data || undefined}
      dropdownItems={[
        {
          label: 'Copy Address',
          color: 'text',
          onClick: () => copyToClipBoard(client.address),
        },
        {
          label: 'Logout',
          color: 'text',
          onClick: logout,
        }
      ]}
    />

  )
}