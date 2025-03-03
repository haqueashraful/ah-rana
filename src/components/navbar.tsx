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
          <ThemeToggle />

          <Button variant="rn" className="hidden lg:flex gap-2 items-center">
            <span>Connect</span>
            <ArrowUpRight className="size-5" />
          </Button>

          <div className="lg:hidden shadow-rn dark:shadow-dark-rn">
            <DropdownMenu modal={false} dir="ltr" open={open} onOpenChange={setOpen}>
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
