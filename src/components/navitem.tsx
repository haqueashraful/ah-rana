"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Project", path: "/project" },
  { id: 4, name: "Contact", path: "/contact" },
];

const NavItem = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-16 w-full">
        {navItems.map((item) => (
          <li className="px-3 py-2 w-full" key={item.id}>
            <Link
              href={item.path}
              className={`block w-full text-foreground hover:text-primary transition-colors ${
                pathname === item.path ? "text-primary font-bold border-b border-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
