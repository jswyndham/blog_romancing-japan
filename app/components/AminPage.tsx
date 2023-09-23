"use client";

import config from "../../sanity.config";
import { NextStudio } from "next-sanity/studio";

const AdminComponent = () => {
  return <NextStudio config={config} />;
};

export default AdminComponent;
