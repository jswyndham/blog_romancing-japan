import React from "react";

export const metadata = {
  title: "About Us",
  description: "An explanation about how and why this we run this site.",
  openGraph: {
    title: "About Us",
    description: "An explanation about how and why this we run this site.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default function about() {
  return <div className="m-12 p-12 text-3xl">About Us</div>;
}
