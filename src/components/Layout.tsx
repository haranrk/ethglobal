import { PropsWithChildren, ReactElement } from "react";
import { Profile, Button } from '@ensdomains/thorin'
import Header from "./Header";
import LoggedInNavbar from "./LoggedInNavbar";
import { useEnsName, useEnsAvatar } from 'wagmi'
import { useDisconnect } from "wagmi";
import { useClient, useSetClient } from "../hooks/useClient";
import { Outlet } from "react-router-dom";


export default function Layout({
  children,
}: PropsWithChildren<unknown>): ReactElement {

  const client = useClient()!;
  return (
    <div>
      {client ? <LoggedInNavbar></LoggedInNavbar> :
        <Header>
          Not logged in header
        </Header>
      }
      <div className="mt-14">
        <Outlet></Outlet>
      </div>
    </div>
  )
}