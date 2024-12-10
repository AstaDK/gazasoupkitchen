"use client"
import { NAVIGATIONS } from '@/constant';
import { useOutsideClick } from '@/hooks/useOutside';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick(navRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/gazasoup-logo.webp" alt="Logo" width={50} height={50} />
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center gap-2"
          aria-label="Toggle navigation"
        >
          <span className="text-xl text-white"><FaBars /></span>
          MENU
        </button>

        <div
          className={cn(
            "lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto",
            "w-full lg:w-auto bg-black lg:bg-transparent",
            "transition-all duration-700 ease-in-out overflow-hidden",
            "lg:opacity-100",
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 xl:opacity-100 lg:max-h-screen"
          )}
        >
          <ul
            className={cn(
              "flex flex-col lg:flex-row items-start lg:items-center",
              "space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0",
              "transition-all duration-300 ease-in-out"
            )}
          >
            {NAVIGATIONS.map((item) => (
              <li
                key={item.href}
                className={cn(
                  "transform transition-transform duration-300 ease-in-out lg:transform-none",
                  isMenuOpen
                    ? `translate-x-0`
                    : '-translate-x-5'
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${NAVIGATIONS.indexOf(item) * 50}ms` : '0ms',
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 lg:py-0 transition-colors duration-300",
                    item.href === pathName ? "text-primary" : "hover:text-white text-white-hover"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}