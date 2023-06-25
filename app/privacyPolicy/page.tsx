import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="relative h-full flex flex-col items-center justify-center overflow-x-hidden">
      {/* Page Banner */}
      <div className="absolute top-0 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
        <h1>Privacy Policy</h1>
      </div>

      <section className="mt-28 mb-24 flex flex-col items-center justify-center px-3 w-[90%] md:w-[75%] xl:max-w-4xl text-justify">
        {/* INTRODUCTION */}
        <article className="mb-8 mt-2">
          <h1 className="py-4 mb-3 text-left text-4xl md:text-5xl">
            Privacy Policy for romancingjapan.com
          </h1>

          <div className="text-xl font-heading">
            <p>
              At Romancing Japan, accessible from www.romancingjapan.com, one of
              our main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by Romancing Japan and how we use it.
            </p>

            <p className="py-4">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to{" "}
              <Link href={"/contact"}>
                <span className="text-blue-700">contact us</span>
              </Link>
              .
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Romancing Japan. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </div>
        </article>

        {/* CONSENT */}

        <h2 className="p-4 mb-3 text-3xl md:text-4xl text-center">Consent</h2>

        <article className="mb-12 mt-2 text-xl font-heading">
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h3 className="pl-2 pt-5 pb-2 text-2xl font-roboto_condensed font-bold">
            Information we collect
          </h3>

          <p className="my-2">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p className="my-5">
            If you{" "}
            <Link href={"/contact"}>
              <span className="text-blue-700">contact us</span>
            </Link>{" "}
            directly, we may receive additional information about you such as
            your name, email address, phone number, the contents of the message
            and/or attachments you may send us, and any other information you
            may choose to provide.
          </p>
          <p className="my-5">
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>

          <h3 className="pl-2 pt-5 pb-2 text-2xl font-roboto_condensed font-bold">
            How we use your information
          </h3>

          <p className="mt-2 mb-4">
            We use the information we collect in various ways, including to:
          </p>

          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h3 className="pl-2 pt-5 pb-2 text-2xl font-roboto_condensed font-bold">
            Log Files
          </h3>

          <p className="my-2">
            Romancing Japan follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.
          </p>

          <h3 className="pl-2 pt-5 pb-2 text-2xl font-roboto_condensed font-bold">
            Advertising Partners Privacy Policies
          </h3>

          <p className="my-2">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Romancing Japan.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Romancing Japan,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>

          <p>
            Note that Romancing Japan has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
        </article>
        <article className="mb-12 mt-2 text-xl font-heading">
          <h2 className="p-3 mb-3 text-3xl md:text-4xl text-center">
            Third Party Privacy Policies
          </h2>

          <p className="my-2">
            Romancing Japan's Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>

          <h3 className="pl-2 pt-5 pb-2 text-2xl font-roboto_condensed font-bold">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </h3>

          <p className="my-2">
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </article>
        <article className="mb-12 mt-2 text-xl font-heading">
          <h2 className="p-4 mb-3 text-3xl md:text-4xl text-center">
            GDPR Data Protection Rights
          </h2>

          <p className="my-2">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </article>
        <article className="mb-12 mt-2 text-xl font-heading">
          <h2 className="p-4 mb-3 text-3xl md:text-4xl text-center">
            Children's Information
          </h2>

          <p className="my-2">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Romancing Japan does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </article>
        <article className="mb-12 mt-2 text-xl font-heading">
          <h2 className="p-4 mb-3 text-3xl md:text-4xl text-center">
            Changes to This Privacy Policy
          </h2>

          <p className="my-2">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>

          <p>
            Our Privacy Policy was created with the help of the{" "}
            <a href="https://www.privacypolicygenerator.info">
              Privacy Policy Generator
            </a>
            .
          </p>
        </article>
        <article className="mb-12 mt-2 text-xl font-heading">
          <h2 className="p-4 mb-3 text-3xl md:text-4xl text-center">
            Contact Us
          </h2>

          <p className="my-2">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
        </article>
      </section>
    </main>
  );
}
