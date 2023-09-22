import Link from "next/link";
import React from "react";
import Image from "next/image";

function SocialMediaLinks() {
  return (
    <div className="flex flex-row gap-8">
      <Link href="https://twitter.com/RomancingJapan" target="_blank">
        <Image
          src="/images/twitter-x-logo.png"
          width={30}
          height={30}
          alt="romancing japan twitter"
        />
      </Link>
      <Link href="https://www.instagram.com/romancingjapan/" target="_blank">
        <Image
          src="/images/instagram-50-white-2.png"
          width={30}
          height={30}
          alt="romancing japan instagram"
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
          alt="romancing japan facebook"
        />
      </Link>
    </div>
  );
}

export default SocialMediaLinks;
