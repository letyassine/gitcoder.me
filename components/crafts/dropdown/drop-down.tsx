"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckAnimatedIcon, CheckStaticIcon, MenuIcon } from "./icons";

const LARACONS_DATA: { id: number; name: string }[] = [
  { id: 1, name: "Denver, USA" },
  { id: 2, name: "Brisbane, Australia" },
  { id: 3, name: "Amsterdam, Netherlands" },
  { id: 4, name: "Casablanca, Morocco" },
];

export default function DropDown() {
  const [selectedLaracon, setSelectedLaracon] = useState<{
    id: number;
    name: string;
  } | null>(null);

  return (
    <Listbox value={selectedLaracon} onChange={setSelectedLaracon}>
      {({ open }) => (
        <>
          <ListboxButton
            style={{
              boxShadow: open
                ? "0 231px 65px 0 rgba(0, 0, 0, 0.01), 0 148px 59px 0 rgba(0, 0, 0, 0.11), 0 83px 50px 0 rgba(0, 0, 0, 0.39), 0 37px 37px 0 rgba(0, 0, 0, 0.66), 0 9px 20px 0 rgba(0, 0, 0, 0.76)"
                : "0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0)",
              transition: "box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
            className="flex h-12 w-[336px] cursor-pointer items-center justify-between rounded-xl border border-neutral-800 bg-gradient-to-r from-[#141414] to-[#1F1F1F] px-4 py-2 text-white focus:outline-none"
          >
            {selectedLaracon ? (
              <div className="font-inter flex items-center gap-3 text-base leading-6 font-semibold tracking-tight text-white">
                <CheckAnimatedIcon key={selectedLaracon.id} />
                <div className="flex flex-col items-start gap-[7px]">
                  <span className="text-[11px] leading-2 font-semibold tracking-[-0.22px] text-neutral-500">
                    City
                  </span>
                  <motion.span
                    key={selectedLaracon.id}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                      filter: { duration: 0.3 },
                    }}
                    className="inline-block leading-3.5"
                  >
                    {selectedLaracon.name}
                  </motion.span>
                </div>
              </div>
            ) : (
              <span className="text-base-white">Select a Laracon</span>
            )}
            <MenuIcon isOpen={open} />
          </ListboxButton>
          <AnimatePresence>
            {open && (
              <ListboxOptions
                static
                transition
                className="absolute top-20 right-48 mt-2 w-[350px] pb-5 text-white focus:bg-transparent focus:ring-0 focus:outline-none"
              >
                {LARACONS_DATA.map((laracon, index) => (
                  <ListboxOption
                    key={laracon.id}
                    value={laracon}
                    className={`my-2 w-[336px] cursor-pointer focus:bg-transparent focus:ring-0 focus:outline-none`}
                    style={{
                      position: "relative",
                      zIndex: 99 - index,
                    }}
                  >
                    {({ selected }) => (
                      <motion.div
                        initial={{
                          opacity: 0,
                          rotate: 2,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: -(index + 1),
                          x: index * 2,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: 0,
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.225,
                            delay: (LARACONS_DATA.length - index - 1) * 0.06,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.06,
                          ease: [0.23, 1, 0.32, 1],
                          opacity: {
                            duration: 0.225,
                            delay: index * 0.06 + 0.075,
                          },
                        }}
                        style={{
                          transformOrigin: "right center",
                        }}
                        className={`flex h-12 w-full items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 transition-colors duration-200 hover:bg-[#1f1f1f]`}
                      >
                        <div className="size-3">
                          {selected ? (
                            <CheckStaticIcon />
                          ) : (
                            <div className="size-3" />
                          )}
                        </div>
                        <span className="text-base-white">{laracon.name}</span>
                      </motion.div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  );
}
