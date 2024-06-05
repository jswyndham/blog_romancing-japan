"use client";

import post from "./post";
import category from "./category";
import tag from "./tag";
import author from "./author";
import siteSettings from "./siteSettings";
import userSignup from "./userEmail";
import table from "./table";
import youtube from "./youtube";
import blockContent from "./blockContent";
import { comment } from "./comment";

const schemas = [
  post,
  category,
  tag,
  author,
  siteSettings,
  userSignup,
  table,
  youtube,
  blockContent,
  comment,
];

export default schemas;
