"use client";
import { useState, useEffect, Fragment } from "react";
import SideBar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { Transition } from "@headlessui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-20 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56 " : ""
        }`}
        style={{background:"#15161B"}}
      >
        <div className="p-4 md:px-16 mx-2" style={{background:"#f3f5ff",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}>{children}</div>
      </main>
    </>
  );
}
