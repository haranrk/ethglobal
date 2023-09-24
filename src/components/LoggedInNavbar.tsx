import { useClient, useSetClient } from "../hooks/useClient";
import LoggedInProfile from "./LoggedInProfile";
import LoggedOutProfile from "./LoggedOutProfile";

import { Link } from "react-router-dom";

export default function LoggedInNavbar({
  children,
}: PropsWithChildren<unknown>): ReactElement {

  const client = useClient()!;
  return (

    <nav className="fixed w-full z-20 top-0 left-0 border-b backdrop-blur-md bg-opacity-30 bg-white shadow-sm dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MakerMeet</span>
        </a>
        <div className="flex md:order-2">
          {client ? <LoggedInProfile></LoggedInProfile> : <LoggedOutProfile></LoggedOutProfile>}
          {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link className="text-gray-900" to="new">
                New Conversation
              </Link>
            </li>
            <li>
              <Link className="text-gray-900" to="/#">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <Header>
    //   <div className="flex justify-between">
    //     <div>MakerMeet</div>
    //     <div>
    //       <div style={{ maxWidth: '50px' }}>
    //         <Profile
    //           address={client.address}
    //           avatar={ensAvatar?.data || undefined}
    //           ensName={ensName?.data || undefined}
    //           dropdownItems={[
    //             {
    //               label: 'Copy Address',
    //               color: 'text',
    //               onClick: () => copyToClipBoard(client.address),
    //             }
    //           ]}
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <Button onClick={logout}>Logout</Button>
    //     </div>
    //   </div>
    // </Header>
  )
}