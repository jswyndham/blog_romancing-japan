import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";

interface WelcomeProps {
  firstName: string;
}

export const Welcome = ({ firstName }: WelcomeProps) => {
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto pt-[20px] w-[600px] px-16 pb-16">
            <Section className="mt-[32px]">
              <Img
                src={"/static/logo-nav.png"}
                width="275"
                height="70"
                alt="Romancing Japan logo"
                className="my-2 mx-auto"
              />
            </Section>
            <Section>
              <Heading>Welcome, {firstName}!</Heading>
              <Text className="text-lg">
                Thanks for signing up to our blog site, Romancing Japan. Since
                you have signed up with us, we will send you monthly messages to
                keep you up-to-date with our latest articles.
              </Text>
            </Section>
            <Section>
              <Text className="text-lg">
                In addition, twice a year we'll send you a newsletter that will
                inform you about what's happening with our website. The
                newsletter will include you in our journey byu documenting the
                progress and changes made to the site over time.
              </Text>
            </Section>
            <Section>
              <Button
                href="https://www.romancingjapan.com"
                className="h-6 w-fit p-3 mt-6 bg-blue-700 text-white font-bold rounded-lg drop-shadow-md shadow-md shadow-slate-9"
              >
                Go to the homepage
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Welcome;
