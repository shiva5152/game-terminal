import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { sectionHeading, sectionSubHeading } from "@/utils/styles";

const policyData = [
  {
    id: 1,
    heading: "Your Privacy Matters!",
    description: [
      "We understand the significance of your privacy and respect your right to control the information we process about you. Entrusting us with your personal data is an act of faith, and we take this responsibility seriously. Game Terminal is committed to never selling, renting, or otherwise disclosing your personal data, except as outlined in the Privacy and Cookie Policy, provided that we have a lawful basis for such disclosure (your consent or a legal obligation). As the controller of your personal data, Game Terminal takes appropriate measures to ensure the security of your data.",
      "By continuing to use our Services following the posting of this Privacy Policy (as applicable), you agree to its terms. This Privacy Policy constitutes our entire and exclusive policy, superseding any previous versions. It should be read in conjunction with our Terms of Service.",
    ],
  },
  {
    id: 2,
    heading: "Updates and Changes",
    description: [
      "We may periodically need to update our Privacy Policy for significant reasons, such as substantial changes in the functionality of our Services or legislative amendments. We will notify you of these changes via email and by posting the modified Privacy Policy on the Website. We recommend that you regularly review this Privacy Policy. If we intend to use your personal data in a manner materially different from that stated at the time of collection, we will notify you by email and/or by posting a notice once you log into your account. You can check the date of the last update at the top of the first page of this Privacy Policy.",
    ],
  },
  {
    id: 3,
    heading: "What Data We Collect",
    description: [
      "In the course of your use of our Services, we collect the following personal data:",
      "1) Registration data: your email address and password, if you choose to create a User Account with us. We process this information to create and manage your account and to contact you.",
      "2) Data collected through your use of our Services: when you use our Services, we collect information about your interaction with the Website and your use of Game Terminal Services (e.g., frequency of use, accessed materials). We collect such data to tailor our Services to your needs, enhance our relationship with you, improve our Services, and compile aggregate data for business purposes.",
      "Legal basis of processing: (i) performance of the contract with you, for tailoring Services to your needs; (ii) our legitimate interest in direct marketing of our Services.",
    ],
  },
  {
    id: 4,
    heading: "Your Rights",
    description: [
      "You have the right to object to the processing of your data by us when it is based on legitimate interest (especially for marketing purposes). If you object to the processing based on legitimate interest, and no obligation to process your data exists on our side, we will stop the processing immediately.",
      "You also have the right to request correction or deletion of your data if you find certain information incorrect or outdated, or if we no longer have a legal basis for processing your data.",
      "If you request that we stop processing and delete your data, we will do so unless there is an important overriding legal interest (e.g., defense of claims) that entitles us to keep your data for a longer period. You also have the right of access to your data, to request a copy of data we process about you, as well as the right to data portability and to restriction of processing.",
    ],
  },
  {
    id: 5,
    heading: "Cookies and Similar Technologies",
    description: [
      "Cookies are text files containing small amounts of information downloaded to your device when you visit a website. They allow a website to recognize a user’s device and perform various functions to improve user experience. We use different types of cookies on the Website, including persistent cookies, session cookies, strictly necessary cookies, performance cookies, functionality cookies, and targeting or advertising cookies.",
      "Cookies and similar technologies are used for statistical purposes, to adapt website content, performance, and structure to users’ preferences, and to provide users with advertising content adapted to their interests. They may collect personal information to enhance site functionality, stored securely and access limited.",
    ],
  },
];

const page = () => {
  return (
    <section>
      <div className="_privacy_Policy mt-10 md:mt-20">
        <h1 className={cn(sectionHeading, "font-bold")}>
          Privacy <span className="text-lime-400">Policy </span>
        </h1>
        <p className={cn(sectionSubHeading, "mb-7 md:mb-10")}>
          This Policy applies to the collection of your personal data, as well
          as to the use of "cookie" files and similar technologies on the
          www.gameterminal.io website (the “Website”). Game Terminal Inc., with
          its registered office at Suite C, Level 7, World Trust Tower, 50
          Stanley Street, Central, Hong Kong (“Game Terminal”, “We” or “Our”).
        </p>

        {policyData.map((data) => (
          <div key={data.id} className="md:mb-8 mb-5">
            <h2 className={cn(sectionHeading, "text-start md:text-3xl")}>
              {data.heading}
            </h2>
            {data.description.map((desc, index) => (
              <p className={cn(sectionSubHeading, "text-justify")} key={index}>
                {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
