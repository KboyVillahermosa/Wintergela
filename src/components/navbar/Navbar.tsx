
"use client";

import { Navbar, DarkThemeToggle } from "flowbite-react";

export function Component() {
  return (
    <Navbar className="dark:bg-gray-900 fixed w-full z-10">
      <Navbar.Brand href="https://flowbite-react.com">
    
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Angela</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="dark mr-3">
        <DarkThemeToggle />
        </div>    
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#header" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#gallery">Gallery</Navbar.Link>
        <Navbar.Link href="#message">Message</Navbar.Link>
   
      </Navbar.Collapse>
    </Navbar>
  );
}
