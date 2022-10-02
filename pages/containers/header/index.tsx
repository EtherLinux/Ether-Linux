import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Mockup from '../../../public/MockupEther_optimized.png';
import TypeEffect from '../../Atoms/typeeffect';

export default function Header() {
  return (
    <>
      <div className="ether_header section_padding" id="home">
        <div className="ether_header_content" data-aos="fade-right">
          <h1 className="gradient_text">Ether Linux</h1>
          <div className="typeeffect">
            <TypeEffect />
          </div>
          <p>
            EtherLinux is a Linux distribution descended from Debian for
            Programming & Penetration Testing needs
          </p>
          <div className="ether_header_content_downloads">
            <Link href="#downloads">
              <a>
                <button type="button">Download</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="ether_header_image" data-aos="zoom-in">
          <Image src={Mockup} alt="Mockup" />
        </div>
      </div>
      <div className="ether_header" />
    </>
  );
}
