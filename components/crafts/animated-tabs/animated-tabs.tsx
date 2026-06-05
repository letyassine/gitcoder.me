import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "business", label: "Business" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2 ${
              isActive
                ? "text-white"
                : "text-black hover:text-black/60 dark:text-white dark:hover:text-white/60"
            } `}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="bg-orange absolute inset-0 z-10 mix-blend-multiply dark:mix-blend-normal"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default AnimatedTabs;
