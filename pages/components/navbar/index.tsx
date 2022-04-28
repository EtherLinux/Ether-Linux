import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Menu from "../../Atoms/Menu";
import Logo from "../../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="ether_nav">
        <div className="ether_nav_links">
          <div className="ether_nav_links_logo">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="ether_nav_links_container">
            <Menu />
          </div>
        </div>
        <div className="ether_nav_sign">
          <Link href="#etherteam">
            <a>
              <p>Ether Team</p>
            </a>
          </Link>
          <Link href="https://www.buymeacoffee.com/EtherLinux">
            <a>
              <button type="button">Donate</button>
            </a>
          </Link>
        </div>
        <div className="ether_nav_menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="ether_nav_menu_container scale-up-center">
              <div className="ether_navbar_menu_container_links">
                <Menu />
              </div>
              <div className="ether_nav_menu_container_links_sign">
                <Link href="#etherteam">
                  <a>
                    <p>Ether Team</p>
                  </a>
                </Link>
                <Link href="https://www.buymeacoffee.com/EtherLinux">
                  <a>
                    <button type="button">Donate</button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

