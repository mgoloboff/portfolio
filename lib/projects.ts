export type Project = {
  slug: string;
  company: string;
  tags: string[];
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  thumbnail?: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imagePosition: "left" | "right";
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    slug: "real-time-reports",
    company: "Browsi",
    tags: ["Data Visualization", "Complex Systems"],
    title: "From Data to Actionable Insights",
    description:
      "Deliver Real-time SaaS analytics platform that turns complex data into clear insights- helping teams decide faster and with confidence",
    metrics: [
      { value: "3", label: "Clients landed" },
      { value: "83%", label: "Users migrated" },
      { value: "−25%", label: "Excel workarounds" },
    ],
    thumbnail: "/real-time-reports-thumb.webp",
    imageAlt: "Real-Time Reports Analytics System",
    imagePosition: "right" as const,
  },
  {
    slug: "revenue-dashboard",
    company: "Browsi",
    tags: ["Revenue Intelligence", "Enterprise"],
    title: "Revenue Overview Dashboard",
    description:
      "Comprehensive revenue dashboard that enable managers to track growth and identify opportunities",
    metrics: [
      { value: "300+", label: "Sites monitored" },
      { value: "100%", label: "Day-one adoption" },
      { value: "4 min", label: "To revenue clarity" },
    ],
    thumbnail: "/revenue-dashboard-thumb.webp",
    imageAlt: "Revenue Overview Dashboard",
    imagePosition: "left" as const,
  },
  {
    slug: "creators-application",
    company: "",
    tags: ["Mobile", "Onboarding"],
    title: "Creators Application Redesign",
    description:
      "Redesigned the onboarding flow for creators, making sign up seamless, boosting activation, and reducing drop-off rates",
    metrics: [],
    thumbnail: "/creators-application-thumb.webp",
    imageAlt: "Creators Application Onboarding",
    imagePosition: "right" as const,
  },
];
