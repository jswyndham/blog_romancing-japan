"use client";

// Dynamically imported libraries
const config = (await import("../../../sanity.config")).default;
const { NextStudio } = (await import("next-sanity/studio")).default;

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
