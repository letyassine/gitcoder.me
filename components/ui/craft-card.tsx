import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CraftCard = ({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className: string;
  title: string;
}) => {
  return (
    <div className="p-2">
      <figure
        className={cn(
          "dark:border-charcoal border-dim-gray relative flex w-full items-center justify-center border border-dashed bg-white/20 bg-repeat dark:bg-black/20",
          className,
        )}
      >
        <span className="dark:text-light-gray absolute top-1 left-5.5 size-fit origin-top-left rotate-90 px-1 text-[12px] font-semibold">
          {title}
        </span>
        {children}
        <span className="lab-bg absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#2121212a_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></span>{" "}
      </figure>
    </div>
  );
};

export default CraftCard;
