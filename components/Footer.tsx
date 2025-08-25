import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:mx-10 xl:mx-75 p-6">
      <div className="flex flex-row items-center justify-between">
        <p>&copy; HH Fan Page. All Rights Reserved. Built by Lata Amenu</p>
        <div>
          <Link href="https://x.com/latiilab">
            <Button variant="link" className="p-1 hover:text-gray-600">
              <FaXTwitter />
            </Button>
          </Link>
          <Link href="https://instagram.com/latiilab">
            <Button variant="link" className="p-1 hover:text-red-600">
              <FaInstagram />
            </Button>
          </Link>
          <Link href="https://t.me/latiila">
            <Button variant="link" className="p-1 hover:text-blue-600">
              <FaTelegram />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
