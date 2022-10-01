import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

interface PeopleProps {
  Name: string;
  Title: string;
  Img:
    | '1.jpg'
    | '2.jpg'
    | '3.jpg'
    | '4.jpg'
    | '5.jpg'
    | '6.jpg'
    | '7.jpg'
    | '8.jpg'
    | '9.png';
  Github: string;
  Ig: string;
  Twitt: string;
}

export default function People(props: PeopleProps) {
  const {
    Name, Title, Img, Github, Ig, Twitt,
  } = props;
  return (
    <div
      className="card"
      data-aos-anchor-placement="bottom-bottom"
      data-aos="fade-up"
    >
      <div className="content">
        <div className="imgBx">
          <Image src={`/faces/${Img}`} alt="" width={180} height={180} />
        </div>
        <div className="contentBx">
          <h4>{Name}</h4>
          <h5>{Title}</h5>
        </div>
        <div className="sci">
          <Link href={`${Github}`}>
            <a>
              <FaGithub />
            </a>
          </Link>
          <Link href={`${Ig}`}>
            <a>
              <FaInstagram />
            </a>
          </Link>
          <Link href={`${Twitt}`}>
            <a>
              <FaTwitter />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
