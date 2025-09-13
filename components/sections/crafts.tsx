"use client";
import React from "react";
import CraftCard from "../ui/craft-card";
import CtaButton from "../crafts/cta/cta-btn";

const Crafts = () => {
  return (
    <section className="border-overlay border-b dark:border-[#1a1a1a]">
      <h2 className="bg-cream border-overlay dark:bg-charcoal-black border-b px-8 py-5.5 text-xl font-bold text-black uppercase dark:border-[#1a1a1a] dark:text-white">
        CRAFTS
      </h2>
      <CraftCard className="py-32">
        <CtaButton onClick={() => alert("Clicked!")}>Book a Call Now</CtaButton>
      </CraftCard>
    </section>
  );
};

export default Crafts;
