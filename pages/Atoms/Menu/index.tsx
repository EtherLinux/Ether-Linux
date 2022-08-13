import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <p>
        <Link href="#home">
          <a>Home</a>
        </Link>
      </p>
      <p>
        <Link href="#about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="#features">
          <a>Features</a>
        </Link>
      </p>
      <p>
        <Link href="#downloads">
          <a>Downloads</a>
        </Link>
      </p>
      <p>
        <Link href="/404">
          <a>Blog</a>
        </Link>
      </p>
    </>
  );
}
