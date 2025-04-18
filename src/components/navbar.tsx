"use client";

import { ArrowUpRight, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import NavItem from "./navitem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";

import "@/app/globals.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`container-rn z-50 transition-all duration-300 ${
        !isTop
          ? "sticky top-0 py-1 bg-white/30 dark:bg-background/30 backdrop-blur-md shadow-md"
          : "py-5"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl text-primary font-semibold uppercase logo">
            Ashraful
          </span>
        </Link>

        <div
          className={`hidden xl:flex rounded-[100px] px-10 py-2 transition-all duration-300 ${
            isTop
              ? "bg-white/50 dark:bg-transparent shadow-rn dark:shadow-dark-rn"
              : "shadow-none border"
          }`}
        >
          <NavItem />
        </div>

        <div className="flex items-center gap-5">
          <ThemeToggle />

          <Button
            variant="rn"
            className={`hidden lg:flex gap-2 items-center transition-all duration-300 ${
              isTop ? "shadow-rn" : "!shadow-none border"
            }`}
          >
            <span>Connect</span>
            <ArrowUpRight className="size-5" />
          </Button>

          <div
            className={`lg:hidden relative transition-all duration-300 ${
              isTop ? "shadow-rn dark:shadow-dark-rn" : "shadow-none"
            }`}
          >
            <DropdownMenu
              modal={false}
              dir="ltr"
              open={open}
              onOpenChange={setOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {open ? <X /> : <MenuIcon />}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="w-48 bg-gray-300/50 backdrop-blur-md rounded-md z-50"
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
