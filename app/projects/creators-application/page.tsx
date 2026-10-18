import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OtherProjects from "@/components/OtherProjects";
import CaseStudyTOC, { type TOCSection } from "@/components/CaseStudyTOC";

export const metadata: Metadata = {
  title: "Creators Application Redesign · Matias Goloboff",
};

const tocSections: TOCSection[] = [
  { id: "overview", label: "Overview" },
  { id: "not-working", label: "What Wasn't Working" },
  { id: "business", label: "Business Potential" },
  { id: "users", label: "Our Users" },
  { id: "user-flow", label: "User Flow" },
  { id: "design-language", label: "Design Language" },
  { id: "screens", label: "Screens" },
  { id: "takeaways", label: "Takeaways" },
];

export default function CreatorsApplication() {
  return (
    <>
      <Nav />
      <CaseStudyTOC sections={tocSections} />

      <div className="max-w-[1080px] mx-auto px-8 pb-[90px] min-h-screen" style={{ padding: "0 32px 90px" }}>

        {/* Header — short subtitle only */}
        <header className="text-center" style={{ padding: "48px 0 8px" }}>
          <h1
            className="font-display font-extrabold leading-[1] tracking-[-0.03em] text-balance mb-5 mx-auto"
            style={{ fontSize: "clamp(34px, 5.6vw, 72px)", maxWidth: "999px" }}
          >
            Application Process for Creators
          </h1>
          <p className="text-[20px] leading-[1.55] text-[#3a352c] max-w-[52ch] mx-auto">
            Redesigning creator onboarding as a mobile-first, human experience.
          </p>
        </header>

        {/* Hero image */}
        <div className="mt-[30px] max-w-[999px] w-full">
          <Image
            src="/creators-hero.png"
            alt="Creators Application – multiple mobile screens showing the onboarding flow"
            width={1234}
            height={485}
            priority
            className="w-full h-auto rounded-[18px]"
          />
        </div>

        {/* [1] Overview — split from header */}
        <CaseSection id="overview" title="Overview">
          <p className="text-[18px] leading-[1.62] text-[#3a352c]">
            The platform&apos;s application process was outdated, creating friction that limited its potential.
            Our challenge was to design a seamless, intuitive, and engaging flow that would increase the number
            of creators completing submissions and boost activation.
          </p>
        </CaseSection>

        {/* What was not working? */}
        <CaseSection id="not-working" title="What was not working?">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <ul className="flex flex-col gap-6">
                <li className="text-[18px] leading-[1.62] text-[#3a352c]">
                  Each brand had its own separate application flow, <strong className="font-semibold text-[var(--fg)]">causing inconsistency</strong>
                </li>
                <li className="text-[18px] leading-[1.62] text-[#3a352c]">
                  A significant <strong className="font-semibold text-[var(--fg)]">33.7% drop-off</strong> rate during the process
                </li>
                <li className="text-[18px] leading-[1.62] text-[#3a352c]">
                  Outdated, lengthy interfaces created <strong className="font-semibold text-[var(--fg)]">friction and confusion</strong>
                </li>
              </ul>
            </div>
            <div className="shrink-0 w-full md:w-[380px] rounded-[18px] overflow-hidden">
              <Image
                src="/creators-old-flow.png"
                alt="Old application flow showing separate brand flows"
                width={912}
                height={844}
                className="w-full h-auto"
              />
            </div>
          </div>
        </CaseSection>

        {/* Business Potential */}
        <CaseSection id="business" title="Business Potential">
          <div className="bg-white border border-[#dedede] rounded-[18px] p-10">
            <p className="font-display font-bold text-[19px] text-[var(--fg)] mb-8 tracking-[-0.01em]">
              Monthly Value per Creator
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[18px] text-[#3a352c]">💵  Revenue</span>
                <span className="font-display font-bold text-[22px] text-[#38b863]">$32.8</span>
              </div>
              <div className="w-full h-[12px] bg-[#49de80] rounded-[8px]" />
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[18px] text-[#3a352c]">💳  Cost</span>
                <span className="font-display font-bold text-[22px] text-[#ef4444]">$8.1</span>
              </div>
              <div className="flex w-full">
                <div className="h-[12px] bg-[#ea4846] opacity-60 rounded-l-[8px]" style={{ width: "25%" }} />
                <div className="h-[12px] bg-[#e1e1e1] opacity-60 rounded-r-[8px] flex-1" />
              </div>
            </div>

            <div className="bg-[#f9f8fd] rounded-[18px] py-4 flex items-center justify-center gap-4 mb-8">
              <span className="text-[18px] text-[#3a352c]">💰 Net Profit</span>
              <span className="font-display font-bold text-[28px] text-[#8a6fdf] tracking-[-0.02em]">$24.7</span>
            </div>

            <p className="text-[18px] leading-[1.62] text-[#3a352c]">
              We owned <strong className="font-semibold">200+ Webpages</strong>, each with about 5 Creators.{" "}
              So even small improvements have a <strong className="font-semibold">big impact</strong>.
            </p>
          </div>
        </CaseSection>

        {/* Who our users are? */}
        <CaseSection id="users" title="Who our users are?">
          <p className="text-[18px] leading-[1.62] text-[#3a352c] mb-12">
            To get a clear picture of our <strong className="font-semibold text-[var(--fg)]">creators&apos; needs and behaviors</strong>, we conducted extensive research
          </p>

          <div className="grid grid-cols-3 mb-16">
            {[
              { n: "86", label: "Questionnaire Responses" },
              { n: "5", label: "Interviewed participants" },
              { n: "8", label: "Phase two Interviews" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <p className="font-display font-extrabold text-[72px] leading-none tracking-[-0.04em] text-[var(--fg)]">{s.n}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] mt-4">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f9fd] rounded-[18px] px-12 py-10 text-center">
            <p className="font-display font-bold text-[19px] text-[var(--fg)] mb-3">
              Main Finding
            </p>
            <p className="text-[18px] leading-[1.62] text-[#3a352c] max-w-[700px] mx-auto">
              The research revealed a completely different user profile.
              Unlike our internal employees, our users are <strong className="font-semibold">driven by passion</strong>.
              They do it in their free time, <strong className="font-semibold">for the love of writing</strong>.
            </p>
          </div>
        </CaseSection>

        {/* [6] HMW banner — no icon */}
        <div className="mt-20 overflow-hidden" style={{ borderTopRightRadius: "16px", borderBottomLeftRadius: "16px" }}>
          <div className="bg-[#25304a] px-12 py-10 text-center">
            <p className="font-display font-bold text-[clamp(22px,2.6vw,28px)] text-[#fafafa] leading-[1.6] max-w-[700px] mx-auto tracking-[-0.02em]">
              <strong>How Might We</strong> create a <strong>B2C mobile-first</strong> application process adapted to our audience?
            </p>
          </div>
        </div>

        {/* User Flow & Journey */}
        <CaseSection id="user-flow" title="User Flow & Journey">
          <p className="text-[18px] leading-[1.62] text-[#3a352c] mb-4">
            We mapped a simple, step-by-step process that guides users clearly and <strong className="font-semibold text-[var(--fg)]">builds trust.</strong>
          </p>
          <p className="text-[18px] leading-[1.62] text-[#3a352c] mb-10">
            Starting with what matters most to them, the flow remains relevant, intuitive, and motivating throughout.
          </p>

          {/* [7] User flow images — rounded-[18px] to match other cards */}
          <div className="flex flex-col gap-8 mb-16">
            <Image
              src="/creators-user-flow.png"
              alt="User flow diagram showing the step-by-step application process"
              width={4096}
              height={1224}
              className="w-full h-auto rounded-[18px]"
            />
            <Image
              src="/creators-user-journey.png"
              alt="User journey map with touchpoints and emotions"
              width={4096}
              height={1836}
              className="w-full h-auto rounded-[18px]"
            />
          </div>

          {/* [5] Opportunity cards — left accent bar, site style */}
          <p className="font-display font-bold text-[19px] text-[var(--fg)] mb-6">
            Opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                color: "#3c82f6",
                title: "Friendly Language",
                text: "The process felt overly technical and impersonal, making users unsure and hesitant to continue",
              },
              {
                color: "#a855f7",
                title: "Clear Process Status",
                text: "There was little feedback along the way, leaving users confused about what to expect next",
              },
              {
                color: "#eab308",
                title: "Streamline Steps",
                text: "The original application journey was long and often frustrating, leading to user drop-off",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: "20px" }}
              >
                <p className="font-display font-bold text-[17px] text-[var(--fg)] mb-2">{item.title}</p>
                <p className="text-[15px] leading-[1.62] text-[#3a352c]">{item.text}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* Design Language — centered showcase */}
        <section id="design-language" className="mt-20 scroll-mt-[120px] text-center" style={{ maxWidth: "999px", width: "100%" }}>
          <h2
            className="font-display font-extrabold tracking-[-0.02em] mb-6 w-full"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            Design Language
          </h2>
          <p className="text-[18px] leading-[1.62] text-[#3a352c] mb-14 max-w-[600px] mx-auto">
            We created a new visual language that feels personal and relevant — speaking directly to creators and building an <strong className="font-semibold">immediate emotional connection.</strong>
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex gap-6 justify-center flex-wrap">
              <Image src="/creators-illustration-1.png" alt="" width={197} height={139} className="h-[170px] w-auto rounded-[8px]" />
              <Image src="/creators-illustration-2.png" alt="" width={237} height={139} className="h-[170px] w-auto rounded-[8px]" />
              <Image src="/creators-illustration-3.png" alt="" width={160} height={139} className="h-[170px] w-auto rounded-[8px]" />
            </div>
            <div className="flex gap-6 justify-center flex-wrap">
              <Image src="/creators-illustration-4.png" alt="" width={178} height={139} className="h-[170px] w-auto rounded-[8px]" />
              <Image src="/creators-illustration-5.png" alt="" width={174} height={139} className="h-[170px] w-auto rounded-[8px]" />
              <Image src="/creators-illustration-6.png" alt="" width={228} height={139} className="h-[170px] w-auto rounded-[8px]" />
            </div>
          </div>
        </section>

        {/* [3][9] Screens — fonts match site, centered narrow layout */}
        <CaseSection id="screens" title="Screens – Bringing Core Values to Life">
          <p className="text-[18px] leading-[1.62] text-[#3a352c] mb-16">
            To help more users complete onboarding, we crafted every screen based on real user needs and experience principles that reflect our product&apos;s personality and purpose.
          </p>

          <div className="flex flex-col gap-24">
            {[
              {
                src: "/creators-screen-1.png",
                alt: "Onboarding screen – motivation and value proposition",
                reverse: false,
                points: [
                  { title: "Motivation First", text: "From the very beginning, we highlight the value users will gain — before asking anything from them. It's about building momentum through early emotional connection." },
                  { title: "Clear Values", text: "Right from the first screen, we express what matters most to our audience: creative freedom, community, and flexibility." },
                ],
              },
              {
                src: "/creators-screen-2.png",
                alt: "Onboarding screen – warm start with name question",
                reverse: true,
                points: [
                  { title: "Warm Start", text: "We open with a simple, human question — not a form. This small touch builds trust before asking for anything more personal." },
                  { title: "Friendly microcopy", text: "We used clear, supportive, and human language throughout the flow. It feels like someone is guiding you, not a system checking boxes." },
                ],
              },
              {
                src: "/creators-screen-3.png",
                alt: "Onboarding screen – step-by-step progress",
                reverse: false,
                points: [
                  { title: "Step-by-Step", text: "We broke the journey into focused steps and added a progress bar. This reduced friction, keeps users engaged and helps avoid overwhelm." },
                  { title: "Personal Comes Later", text: "We start with the professional questions — the reason users came. Then move to personal info once rapport is established." },
                ],
              },
              {
                src: "/creators-screen-4.png",
                alt: "Onboarding screen – celebrating progress with community",
                reverse: true,
                points: [
                  { title: "Keep it simple", text: "The entire flow is short, intuitive, and built to keep users moving forward without second-guessing." },
                  { title: "Celebrating progress", text: "Each step comes with clear feedback and visual indicators of progress, helping users feel in control and motivated to finish." },
                ],
              },
            ].map(({ src, alt, reverse, points }) => (
              <div
                key={src}
                className={`flex flex-col gap-10 items-center max-w-[700px] mx-auto w-full ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="shrink-0 w-[220px]">
                  <Image
                    src={src}
                    alt={alt}
                    width={340}
                    height={736}
                    className="w-full h-auto rounded-[18px]"
                    style={{ boxShadow: "-8px 23px 54px rgba(0,0,0,0.1)" }}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-10">
                  {points.map(({ title, text }) => (
                    <div key={title}>
                      <p className="font-display font-bold text-[19px] text-[var(--fg)] mb-3">{title}</p>
                      <p className="text-[18px] leading-[1.62] text-[#3a352c]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* [10] Key Takeaways — accent left-border style like rest of site */}
        <CaseSection id="takeaways" title="Key Takeaways from the Process">
          <ul className="flex flex-col gap-5">
            {[
              <>Learned to always <strong className="font-semibold">question product requirements</strong> — I received desktop-only wireframes with no mention of mobile, so by challenging assumptions early, I ensured a proper mobile-first design.</>,
              <>Team collaboration improves the product: by focusing on my UX strengths and guiding a teammate on illustrations, we leveraged each member&apos;s skills to deliver a <strong className="font-semibold">stronger, more polished result</strong>.</>,
            ].map((item, i) => (
              <li
                key={i}
                className="text-[18px] leading-[1.62] text-[#3a352c]"
                style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "22px" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        <OtherProjects currentSlug="creators-application" />
      </div>

      <Footer />
    </>
  );
}

function CaseSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-20 scroll-mt-[120px]" style={{ maxWidth: "999px", width: "100%" }}>
      <h2
        className="font-display font-extrabold tracking-[-0.02em] mb-6 w-full"
        style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
