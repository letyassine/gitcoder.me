"use client";
import React from "react";
import CraftCard from "../ui/craft-card";
import CtaButton from "../crafts/cta/cta-btn";

const Crafts = () => {
  return (
    <section className="border-overlay border-b">
      <h2 className="bg-cream border-overlay border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        CRAFTS
      </h2>
      <CraftCard className="py-32">
        <CtaButton onClick={() => alert("Clicked!")}>Book a Call Now</CtaButton>
      </CraftCard>
    </section>
  );
};

export default Crafts;
