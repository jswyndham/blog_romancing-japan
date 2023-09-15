import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-12 footer footer-center rounded bg-slate-900 p-6 text-base-content">
        <div className="grid grid-flow-col gap-8 text-white">
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
        </div>
        <div>
          <div className="pb-3">
            <Link href="/">
              <Image
                src="/images/logo-footer-white-2.png"
                width={175}
                height={65}
                alt="romancing japan white logo"
              />
            </Link>
          </div>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://twitter.com/RomancingJapan" target="_blank">
              <Image
                src="/images/twitter-x-logo.png"
                width={30}
                height={30}
                alt="twitter logo"
              />
            </Link>
            <Link
              href="https://www.instagram.com/romancingjapan/"
              target="_blank"
            >
              <Image
                src="/images/instagram-50-white-2.png"
                width={30}
                height={30}
                alt="instagram logo"
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100093723613018"
              target="_blank"
            >
              <Image
                src="/images/facebook-50-white.png"
                width={30}
                height={30}
                alt="facebook logo"
              />
            </Link>
          </div>
        </div>
        <div className="text-white">
          <p>Copyright © 2023 - All right reserved by JSW Web Dev</p>
        </div>
      </footer>
    </>
  );
}
