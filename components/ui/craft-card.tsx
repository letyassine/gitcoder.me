import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CraftCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className="p-2">
      <div
        className={cn(
          "border-overlay flex w-full justify-center border border-dashed bg-white py-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CraftCard;
