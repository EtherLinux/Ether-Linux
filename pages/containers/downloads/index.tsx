import React from "react";
import Image from "next/image";
import DownloadImage from "../../../public/download.png";
import ButtonDownload from "./../../Atoms/ButtonDownload/index";
import Alert from "./../../Atoms/alert/index";
import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div className="ether_downloads section_padding" id="possibility">
        <div className="ether_downloads_image" id="downloads">
          <Image src={DownloadImage} alt="downloads" data-aos="fade-right" />
        </div>
        <div className="ether_downloads_content" data-aos="zoom-in">
          <h1 className="gradient_text">Ether Linux Pentest</h1>
          <p>
            EtherLinux is an operating system designed for hacking and
            penetration testing. <br />
            Using the desktop environment of xfce. Based on Debian SID with
            codename kumoro. <br />
            Release in 2021 with version 1.0.
          </p>
          <Alert />
          <Link href="/404">
            <a>
              <ButtonDownload />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
