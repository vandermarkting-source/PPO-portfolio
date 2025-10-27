/** @source navbar17 */
"use client";

import { Menu, X, FileText } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Levensloop", link: "/levensloop" },
  { name: "DISC", link: "/disc" },
  { name: "Belbin", link: "/belbin" },
  { name: "360° Feedback", link: "/feedback" },
  { name: "Ontwikkelplan", link: "/pop" },
  { name: "Reflectie moduul 1", link: "/reflectie-moduul-1" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const currentItem = NAV_ITEMS.find(item => item.link === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`,
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container flex items-center justify-between py-4">
        {/* Empty Left Space */}
        <div className="w-10"></div>

        {/* Center Title */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Screenshot_2025-01-14_at_14.11.02-removebg-preview%20copy.png"
              alt="Thom van der Mark"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg font-semibold tracking-tighter font-heading">
              Portfolio - Thom van der Mark
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:block lg:hidden">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3 relative"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    data-nav-item={item.name}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                      activeItem === item.name
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Link to={item.link} onClick={() => setActiveItem(item.name)}>
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* CV PDF direct link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="relative cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                <a href="/CV%20Thom%20van%20der%20Mark%20copy.pdf" target="_blank" rel="noopener" data-nav-item="CV">
                  CV
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Hamburger Menu */}
        <DesktopMobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </nav>
    </header>
  );
};

export default Navbar;

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const DesktopMobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block flex h-full items-center">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <Link
                  to={navItem.link}
                  onClick={() => {
                    setActiveItem(navItem.name);
                    setIsOpen(false);
                  }}
                  className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button asChild variant="outline">
                <a href="/CV%20Thom%20van%20der%20Mark%20copy.pdf" target="_blank" rel="noopener">
                  <FileText className="w-4 h-4 mr-2" />
                  CV
                </a>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
