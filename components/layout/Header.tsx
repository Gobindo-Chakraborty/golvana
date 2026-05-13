import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

import LocationIcon from "../icons/LocationIcon";
import SearchIcon from "../icons/SearchIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SunIcon from "../icons/SunIcon";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";

export default function Header() {
  return (
    <header className="w-full">
      <div className="w-11/12 mx-auto flex flex-col gap-5 mt-5 items-center">
        <div className="flex gap-3.75 items-center">
          <Link href="/" className="shrink-0">
            <Image
              className="h-6.5 w-auto"
              src={logo}
              alt="Golvana Logo"
              width={202}
              height={52}
            />
          </Link>

          <Link
            href="#"
            className="flex text-secondary-text-1 items-center gap-0.5"
          >
            <LocationIcon className="w-3.25 h-3.25" />
            <span className="text-xs font-semibold mt-0.5">USA</span>
          </Link>
        </div>

        <div className="bg-card-bg border border-card-border rounded-[5px] flex w-full gap-3">
          <div className="flex flex-1 max-w-full min-w-0 items-center gap-1.25 bg-primary-bg border border-card-border rounded-[5px] my-1.25 ml-1">
            <button
              className="pl-1.75 py-1.5 pr-1.25 cursor-pointer shrink-0"
              type="button"
              aria-label="Search"
            >
              <SearchIcon className=" w-4.5 h-4.5" />
            </button>
            <input
              className="placeholder:text-[10px] outline-none placeholder:font-normal font-normal text-[10px] h-full flex-1 min-w-0 max-w-full pr-3"
              type="text"
              placeholder="Search in Golvana"
            />
          </div>

          <div className="flex gap-4 mr-4.75 shrink-0">
            <button type="button" aria-label="Open profile">
              <ProfileIcon className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Theme options">
              <SunIcon className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Wishlist">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button
              className="relative"
              type="button"
              aria-label="Shopping cart"
            >
              <span className="text-orange-1 text-[10px] font-bold bg-card-bg absolute top-1.25 left-2 leading-[100%] p-0.5">
                120
              </span>
              <CartIcon className="w-5.25 h-5.25" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
