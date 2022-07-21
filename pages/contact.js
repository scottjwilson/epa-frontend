import Animated from "@/components/Animated";
import Hero from "@/components/Hero";

import Section from "@/components/Section";
import { NextSeo } from "next-seo";

export default function ContactPage() {
  return (
    <>
      <NextSeo title="Contact" description="Contact Scott Wil" />
      <Animated>
        <Hero title="Let's create something they'll love" />
        <Section>
          <div className="p-2">
            <p className="text-center">
              With over 2 years of experience creating User Experience focused
              websites, I&apos;m able to tailor websites to suit your companies
              needs. Business and techonology are always evolving, you&apos;ll
              need innovative solutions to stay ahead of the curve. Your website
              should engage your customers effectively and make your job easier.
              Good tech creates happy customers. <br /> <br />
              <strong>Just shoot me an email</strong>, and we&apos;ll set up a
              meeting. <br /> <br />
              <a className="text-lg underline" href="mailto:hey@scottwil.com">
                hey@scottwil.com
              </a>
            </p>
          </div>
        </Section>
      </Animated>
    </>
  );
}
