import Link from "next/link";
import { Work } from "pages";
import React from "react";
import tw from "twin.macro";
import { Container } from "./About";
import Section from "./Section";

const Go = tw.a`font-semibold bg-blue-500 px-12 py-4 inline-block rounded-lg cursor-pointer transition-all ease-linear `;

export default function CallToAction() {
  return (
    <Container>
      <div className="md:py-16 py-10">
        <div className="md:p-12 md:mx-12 p-6 space-y-6  shadow-md shadow-blue-400  dark:shadow-blue-900 rounded-xl ">
          <h1 className="text-4xl dark:text-white font-bold">
            How do we get started?
          </h1>
          <p className="dark:text-white">
            Schedule a call so I can learn about your product. Let&apos;s
            discuss how I can potentially add value to your organization.
          </p>

          <Link href="/contact">
            <Go>Let&apos;s get started</Go>
          </Link>
        </div>
      </div>
    </Container>
  );
}
