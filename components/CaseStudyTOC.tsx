"use client";

import { useEffect, useRef, useState } from "react";

export type TOCSection = {
  id: string;
  label: string;
};

export default function CaseStudyTOC({ sections }: { sections: TOCSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  useEffect(() => {
    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        if (visibleIds.size === 0) return;

        const firstVisible = sections.find((s) => visibleIds.has(s.id));
        if (firstVisible && firstVisible.id !== activeIdRef.current) {
          setActiveId(firstVisible.id);
        }
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden 2xl:block 2xl:sticky 2xl:top-[110px] 2xl:h-fit 2xl:self-start">
      <nav aria-label="Case study sections">
        <ul className="flex flex-col border-l border-[var(--border)]">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`block -ml-px pl-4 py-[7px] border-l-2 text-[13px] leading-[1.4] transition-colors ${
                    isActive
                      ? "border-[var(--fg)] text-[var(--fg)] font-semibold"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
