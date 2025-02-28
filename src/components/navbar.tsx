"use client";

import { ArrowUpRight, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import NavItem from "./navitem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";

import "@/app/globals.css";

function NavBar() {
  const [open, setOpen] = useState(false);


  return (
    <nav className="container-rn py-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl text-primary font-semibold uppercase logo">
            Ashraful
          </span>
        </Link>

        <div className="hidden xl:flex rounded-[100px] bg-white/50 dark:bg-transparent shadow-rn dark:shadow-dark-rn px-10 py-2">
          <NavItem />
        </div>

        <div className="flex items-center gap-5">
          {/* <Button
            variant="secondary"
            className="p-2 lg:p-4 flex gap-4 rounded-full shadow-rn-3d hover:shadow-rn-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </Button> */}
          <ThemeToggle />

          <Button variant="rn" className="hidden lg:flex gap-2 items-center">
            <span>Connect</span>
            <ArrowUpRight className="size-5" />
          </Button>

          <div className="lg:hidden shadow-rn dark:shadow-dark-rn">
            <DropdownMenu dir="ltr" open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {open ? <X /> : <MenuIcon />}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="w-48 bg-background border"
              >
                <NavItem />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
