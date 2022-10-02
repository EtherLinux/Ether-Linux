import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTelegram,
} from 'react-icons/fa';
import LogoFooter from '../../../public/LogoFooter.png';

export default function Footer() {
  return (
    <div className="ether_footer">
      <div className="ether_footer_heading" />
      <div className="ether_footer_links">
        <div className="ether_footer_links_logo">
          <Image src={LogoFooter} alt="Logo" />
        </div>
        <div className="ether_footer_links_div">
          <p>
            <Link href="https://github.com/EtherLinux">
              <a>
                <FaGithub />
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://www.instagram.com/ether_offical/">
              <a>
                <FaInstagram />
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://discord.gg/6szGGZfYHv">
              <a>
                <FaDiscord />
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://www.youtube.com/channel/UCM4PlFJEaUgtzG7Pn4XhKJA">
              <a>
                <FaYoutube />
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://t.me/etherlinuxteam">
              <a>
                <FaTelegram />
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="ether_footer_copyright">
        <p>©2022 Ether Linux by Ether Team</p>
      </div>
    </div>
  );
}
