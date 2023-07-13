import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { writeClient } from "../../../sanity/config/client-config";

export async function POST(req, res) {
  // Request the json body
  const body = await req.json();

  const data = {
    _type: "userEmail",
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  };

  try {
    createClient(writeClient).create(data);

    return NextResponse.json({ data: body.data }, { message: "Success!" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Could not send email." });
  }
}
