import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
   // Added the SearchIcon
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../../media/matt.jpg'

type TopBarProps = {
  showNav: boolean;
  setShowNav: (show: boolean) => void;
};

const TopBar: React.FC<TopBarProps> = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`fixed w-full h-20 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
      style={{ background: "#15161B" }}
    >
      <div className="pl-1 md:pl-1 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64" fill="none" className="cursor-pointer" onClick={() => setShowNav(!showNav)}>
      <path d="M10.6666 31.9999H53.3333M10.6666 21.3333H53.3333M10.6666 42.6666H32" stroke="#C5C5C5" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        
        <div className="text-gray-300 ml-1">Welcome, Samuel</div>
      </div>
      <div className="flex justify-center items-center">
        {/**        <div className="relative w-64">
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            className="block w-full rounded-md border-0 border-#25262B px-3.5 py-2 pl-8 text-gray-300 shadow-sm ring-1 ring-inset  placeholder:text-gray-400   sm:text-sm sm:leading-6"
            style={{ background: "#25262B", borderColor: "#25262B",outline:"none"}}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>

          </div>
        </div> */}
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-secondary">

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="h-6 w-6 text-secondary">
                <path d="M32.2332 24.1499L30.5665 21.3833C30.2165 20.7666 29.8998 19.5999 29.8998 18.9166V14.6999C29.8998 10.7833 27.5998 7.39992 24.2832 5.81659C23.4165 4.28325 21.8165 3.33325 19.9832 3.33325C18.1665 3.33325 16.5332 4.31659 15.6666 5.86659C12.4166 7.48325 10.1666 10.8333 10.1666 14.6999V18.9166C10.1666 19.5999 9.84989 20.7666 9.49989 21.3666L7.81656 24.1499C7.14989 25.2666 6.99989 26.4999 7.41656 27.6333C7.81656 28.7499 8.76656 29.6166 9.99989 30.0333C13.2332 31.1333 16.6332 31.6666 20.0332 31.6666C23.4332 31.6666 26.8332 31.1333 30.0665 30.0499C31.2332 29.6666 32.1332 28.7833 32.5665 27.6333C32.9998 26.4833 32.8832 25.2166 32.2332 24.1499Z" fill="#C5C5C5"/>
                <path d="M24.7162 33.3499C24.0162 35.2833 22.1662 36.6666 19.9995 36.6666C18.6828 36.6666 17.3828 36.1333 16.4662 35.1833C15.9328 34.6833 15.5328 34.0166 15.2995 33.3333C15.5162 33.3666 15.7328 33.3833 15.9662 33.4166C16.3495 33.4666 16.7495 33.5166 17.1495 33.5499C18.0995 33.6333 19.0662 33.6833 20.0328 33.6833C20.9828 33.6833 21.9328 33.6333 22.8662 33.5499C23.2162 33.5166 23.5662 33.4999 23.8995 33.4499C24.1662 33.4166 24.4328 33.3833 24.7162 33.3499Z" fill="#C5C5C5"/>
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded-2xl max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications </p>
                  <a className="text-sm border border-primary rounded-full p-1 px-8 text-primary" href="#">
                    &ensp;Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-primary h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  {/* Repeat this notification structure as needed */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <Image
                  src={Logo}
                  className="h-8 w-8 rounded-full"
                  alt="profile picture"
                  width={160.8} 
                  height={60.9} 
                />
              </picture>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-white" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded-2xl   shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="/dashboard/profile"
                    className="flex text-hover text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                     Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/profile/subscription"
                    className="flex text-hover hover:text-white text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <CreditCardIcon className="h-4 w-4 mr-2" />
                    Subscription & payments
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/dashboard/settings"
                    className="flex text-hover hover:text-white text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/dashboard/settings"
                    className="flex text-hover hover:text-white text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Integrations and Apps
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/dashboard/settings"
                    className="flex text-hover hover:text-white text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Report
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/dashboard/settings"
                    className="flex text-hover hover:text-white text-gray-700 rounded-3xl p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Sign Out
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
