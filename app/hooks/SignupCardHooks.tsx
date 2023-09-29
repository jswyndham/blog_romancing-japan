import React, { useRef, useState } from "react";

function SignupCardHooks() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current?.value,
      email: emailRef.current?.value,
    };

    await fetch("api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(data, "Contact sent");
    });

    await fetch("api/emails", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(data, "Email sent");
    });

    setContactDetails({ firstName: "", email: "" });
  };
  return {
    firstNameRef,
    emailRef,
    contactDetails,
    setContactDetails,
    handleSubmit,
  };
}

export default SignupCardHooks;
