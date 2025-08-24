"use client";
import * as React from "react";
import { FaSpotify } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // shadcn button
import { FaYoutube } from "react-icons/fa6";
import { MdPublic } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  const [mounted, setMounted] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768); // Tailwind md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-row justify-between items-center py-4 w-full">
      {/* Left - Menu Icon on small screens */}
      {isSmallScreen && (
        <button className="p-2 mr-2 flex items-center">
          {/* Menu icon using react-icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      <h1 className="text-lg font-bold">
        {isSmallScreen ? "HH" : "Hachalu Hundessa"}
      </h1>

      {/* Navigation Links for large screens */}
      {!isSmallScreen && (
        <div className="flex flex-row items-center md:gap-2 xl:gap-10">
          <Link href="/">
            <Button
              variant="link"
              className="text-inherit"
              onClick={() =>
                document.getElementById("home-section")?.scrollIntoView()
              }
            >
              Home
            </Button>
          </Link>
          <Link href="/biography">
            <Button variant="link" className="text-inherit">
              Biography
            </Button>
          </Link>
          <Link href="/albums">
            <Button variant="link" className="text-inherit">
              Albums
            </Button>
          </Link>
          <Link href="/fansection">
            <Button variant="link" className="text-inherit">
              Fan Section
            </Button>
          </Link>
          <Link href="/socials">
            <Button variant="link" className="text-inherit">
              Socials
            </Button>
          </Link>
        </div>
      )}

      {/* Right - Social Icons */}
      <div className="flex flex-row gap-2 xl:gap-6">
        <Button variant="link" className="p-1 hover:text-red-600">
          <FaYoutube />
        </Button>
        <Button variant="link" className="p-1 hover:text-blue-600">
          <MdPublic />
        </Button>
        <Button variant="link" className="p-1 hover:text-green-600">
          <FaSpotify className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}
