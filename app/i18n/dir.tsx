"use client";

import type { ComponentPropsWithoutRef, ElementType } from "react";
import { useT } from "next-i18next/client";

type DirProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "dir">;

export default function Dir<T extends ElementType = "div">({
  as,
  ...props
}: DirProps<T>) {
  const { i18n } = useT();
  const Tag = (as ?? "div") as ElementType;
  return <Tag dir={i18n.dir(i18n.language)} {...props} />;
}
