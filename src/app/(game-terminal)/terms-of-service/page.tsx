import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

type TTermData = {
  id: number;
  heading: string;
  description?: string;
  dataList?: {
    starting?: string;
    list?: string[];
    ending?: string;
  };
};
const termsData: TTermData[] = [
  {
    id: 1,
    heading: "Services Provided",
    description:
      "To use our Services, you must be 18 years of age or older and have the legal capacity to enter into a binding agreement. You can access our Services for free via the Website or create a user account (“User Account”). To create a User Account, you must provide a valid email address and create a password.",
    dataList: {
      starting:
        "Game Terminal offers a range of services through the Website, including:",
      list: [
        "Providing information about our business and services",
        "Providing access to play and download games",
        "Create your wallet and profile",
        "Facilitating contact with us",
      ],
      ending: "Collectively, these services are referred to as the “Services”.",
    },
  },
  {
    id: 2,
    heading: "Minimum Technical Requirements",
    description:
      "To use our Services, you must be 18 years of age or older and have the legal capacity to enter into a binding agreement. You can access our Services for free via the Website or create a user account (“User Account”). To create a User Account, you must provide a valid email address and create a password.",
    dataList: {
      starting: "To access our Services, you must have:",
      list: [
        "Internet connection",
        "The most up-to-date version of browsers such as Microsoft Internet Explorer, Mozilla Firefox, Opera, Google Chrome, or Apple Safari, with cookies and Java Script enabled",
      ],
    },
  },
  {
    id: 3,
    heading: "Intellectual Property",
    description:
      "All content on the Website is protected under applicable intellectual property laws. By accepting these TOS, you agree to abide by these provisions. You may only view, copy, print, and distribute (but not modify) the content on the Website.",
  },
  {
    id: 4,
    heading: "Refund Policy and Complaints Procedure",
    description:
      "If you are unsatisfied with our Services or encounter any issues, you can file a complaint electronically by contacting our Customer Service team at contact@gameterminal.io. Your complaint will be addressed promptly, within 30 days of receipt. For more information, refer to our Refund Policy.",
  },
  {
    id: 5,
    heading: "Cancelling Your Account",
    description:
      "You may cancel your account at any time by contacting our Customer Service team at hello@gameterminal.cc. For information regarding refunds, please review our Payment Policy.",
  },
  {
    id: 6,
    heading: "Payment Policy",
    description:
      "Certain parts of our Services may require payment of subscription fees. Our Payment Policy applies to users who purchase subscription plans or provide payment details for Services.",
  },
  {
    id: 7,
    heading: "Restrictions and Prohibited Uses",
    dataList: {
      starting: "Users are prohibited from engaging in activities such as:",
      list: [
        "Impersonating another person or using their User Account information without authorization",
        "Violating Services' security features",
        "Redistributing, decompiling, or reverse engineering Services",
        "Engaging in fraudulent, abusive, or illegal activity",
      ],
      ending:
        "For a comprehensive list, refer to our Restrictions and Prohibited Uses section.",
    },
  },
  {
    id: 8,
    heading: "Disclaimers",
    description:
      "Our Services are provided on an “as is”, “as available” basis, without warranties of any kind, express or implied. Game Terminal disclaims any and all warranties, including merchantability and fitness for a particular purpose.",
  },
  {
    id: 9,
    heading: "Limitation of Liability",
    description:
      "To the maximum extent permitted by law, Game Terminal and its affiliates shall not be liable for any direct, indirect, incidental, punitive, or consequential damages arising from your use of our Services.",
  },
  {
    id: 10,
    heading: "Indemnity",
    description:
      "You agree to indemnify and hold Game Terminal harmless from any claims or demands arising from your access to our Services or violation of these TOS.",
  },
  {
    id: 11,
    heading: "Restrictions and Prohibited Uses",
    dataList: {
      list: [
        "Severability and Waiver: If any provision of these TOS is held invalid, the remaining provisions shall remain in full effect.",
        "Governing Law: These TOS shall be governed by Polish law. Disputes shall be resolved amicably, or through the European Commission’s Online Dispute Resolution system.",
        "Change Policy: Game Terminal reserves the right to update these TOS. The version in place at the time of purchase and download of our Services shall apply.",
        "Miscellaneous: These TOS constitute the entire agreement between you and Game Terminal, superseding all previous agreements. In case of conflict, these TOS shall prevail.",
      ],
    },
    description:
      "By using our Services, you acknowledge and agree to these Terms and Conditions. If you have any questions or concerns, please contact us at contact@gameterminal.io.",
  },
];

const page = () => {
  return (
    <section>
      <div className="_privacy_Policy mt-10 md:mt-20">
        <h1 className={cn(sectionHeading, "font-bold")}>
          Terms of <span className="text-lime-400">Services</span>
        </h1>
        <p className={cn(sectionSubHeading, "mb-7 md:mb-10")}>
          Welcome to Game Terminal, provided by Game Terminal, with its
          registered office at Suite C, Level 7, World Trust Tower, 50 Stanley
          Street, Central, Hong Kong (“Game Terminal” or “Company”). These Terms
          of Service (“TOS”) govern your use of the Game Terminal platform
          accessible via the{" "}
          <a
            className="hover:text-lime-400 transition-colors duration-200 "
            href="https://www.gameterminal.io/"
            target="_black"
          >
            www.gameterminal.io
          </a>{" "}
          website and its mobile version (the “Website”). By accessing or using
          our Services, you agree to be bound by these TOS. If you do not agree
          with these terms, please refrain from accessing or using our Services.
        </p>

        {termsData.map((data) => (
          <div key={data.id} className="md:mb-8 mb-5">
            <h2 className={cn(sectionHeading, "text-start md:text-3xl")}>
              {data.heading}
            </h2>
            {data.dataList ? (
              <>
                {data.dataList.starting && (
                  <p className={cn(sectionSubHeading, "text-start")}>
                    {data.dataList.starting}
                  </p>
                )}
                {data.dataList.list &&
                  data.dataList.list.map((l) => (
                    <div className="" key={l}>
                      <li className={cn(sectionSubHeading, "text-start mt-2")}>
                        {l}
                      </li>
                    </div>
                  ))}
                {data.dataList.ending && (
                  <p className={cn(sectionSubHeading, "text-start ")}>
                    {data.dataList.ending}
                  </p>
                )}
              </>
            ) : null}
            {data.description ? (
              <p className={cn(sectionSubHeading, "text-justify")}>
                {data.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
