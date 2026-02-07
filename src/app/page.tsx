"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingHearts from "@/components/FloatingHearts";
import LandingSection from "@/components/LandingSection";
import BookSection from "@/components/BookSection";
import OurJourneySection from "@/components/OurJourneySection";
import TimelineSection from "@/components/TimelineSection";
import MemoriesSection from "@/components/MemoriesSection";
import ProposalSection from "@/components/ProposalSection";
import MusicToggle from "@/components/MusicToggle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const memoriesRef = useRef<HTMLElement>(null);
  const proposalRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!showContent || !mainRef.current) return;

    const sections = [
      { ref: bookRef, y: 40 },
      { ref: journeyRef, y: 30 },
      { ref: memoriesRef, y: 30 },
      { ref: proposalRef, y: 30 },
      { ref: timelineRef, y: 30 },
    ];

    sections.forEach(({ ref, y }) => {
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [showContent]);

  return (
    <main ref={mainRef} className="relative">
      <FloatingHearts />
      <MusicToggle />
      <LandingSection onContinue={() => setShowContent(true)} />
      {showContent && (
        <>
          <section ref={bookRef}>
            <BookSection />
          </section>
          <section ref={journeyRef}>
            <OurJourneySection />
          </section>
          <section ref={memoriesRef}>
            <MemoriesSection />
          </section>
          <section ref={proposalRef}>
            <ProposalSection />
          </section>
          <section ref={timelineRef}>
            <TimelineSection />
          </section>
        </>
      )}
    </main>
  );
}
