import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdMailOutline} from "react-icons/md";
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-[10vh] px-4 sm:px-10 [&_*]:transition-colors [&_*]:ease-linear [&_*]:duration-150">
      <div className="logo font-sans text-lg">
        {/* <span className="font-bold">Mbianou</span> Bradon */}
        <div className="h-20 w-20">
          <img src={logo} alt="" className="object-cover" />
        </div>
      </div>
      <div className="menu hidden md:block">
        <ul className="flex justify-between items-center gap-10 [&>*:hover]:text-secondary">
          <li>
            <NavLink to="/" className={({isActive}) => isActive? "border-b-2 border-primary text-primary":""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive? "border-b-2 border-primary text-primary":""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive? "border-b-2 border-primary text-primary":""}>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div className="socials hidden sm:flex gap-12 items-center">
        <ul className="flex justify-between gap-4 text-sm [&>*:hover]:bg-secondary/60 [&>*:hover]:text-white [&>*]:cursor-pointer">
          <li
            className="w-10 h-10 text-primary rounded-full flex items-center justify-center shadow-inner shadow-primary "
            title="twitter"
          >
            <a href="" className="flx items-center gap-1">
              <div>
                <BsTwitter />
              </div>
            </a>
          </li>
          <li
            className="w-10 h-10 text-primary rounded-full flex items-center justify-center shadow-inner shadow-primary "
            title="GitHub"
          >
            <a href="" className="flx items-center gap-1">
              <div>
                <BsGithub />
              </div>
            </a>
          </li>
          <li
            className="w-10 h-10 text-primary rounded-full flex items-center justify-center shadow-inner shadow-primary "
            title="Mail"
          >
            <div>
              <MdMailOutline />
            </div>
          </li>
        </ul>
      </div>

      <div className="text-3xl md:hidden">
        <FiMenu />
      </div>
    </nav>
  );
}