import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { SiCodepen } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const CraftCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className="relative p-2">
      <Link
        href="https://codepen.io/gitcoder/pen/JoYZMYM"
        target="_blank"
        className="text-purple absolute top-6 right-6 hover:opacity-80"
      >
        <SiCodepen size={32} />
      </Link>
      <figure
        className={cn(
          "border-purple flex w-full items-center justify-center border border-dashed bg-white bg-[url('/texture.svg')] bg-repeat",
          className,
        )}
      >
        {children}
      </figure>
    </div>
  );
};

export default CraftCard;
