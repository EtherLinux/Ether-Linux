import React from 'react';
import Link from 'next/link';

export default function Donate() {
  return (
    <div className="ether_donate" data-aos="fade-up">
      <div className="ether_donate_content">
        <h3>
          You can also contribute & support this project through donations.
        </h3>
      </div>
      <div className="ether_donate_btn">
        <Link href="https://www.buymeacoffee.com/EtherLinux">
          <a>
            <button type="button">Donate</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
