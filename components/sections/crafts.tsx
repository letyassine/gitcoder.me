"use client";
import React from "react";
import CraftCard from "../ui/craft-card";
import CtaButton from "../crafts/cta/cta-btn";
import DropDown from "../crafts/dropdown/drop-down";
import AnimatedTabs from "../crafts/animated-tabs/animated-tabs";

const Crafts = () => {
  return (
    <section>
      <h2 className="bg-cream border-overlay dark:bg-charcoal-black dark:border-charcoal-gray border-b px-8 py-5.5 text-xl font-bold text-black uppercase dark:text-white">
        CRAFTS
      </h2>
      <CraftCard title="accordion-drop-down" className="pt-8 pb-72">
        <DropDown />
      </CraftCard>
      <CraftCard title="call-to-action" className="py-32">
        <CtaButton>Book a Call Now</CtaButton>
      </CraftCard>
      <CraftCard title="animated-tabs" className="py-32">
        <AnimatedTabs />
      </CraftCard>
    </section>
  );
};

export default Crafts;
