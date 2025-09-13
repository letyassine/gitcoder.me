interface PatternDividerProps {
  height?: string;
  className?: string;
}

export default function PatternDivider({
  height = "h-[65px]",
  className = "border-y",
}: PatternDividerProps) {
  return (
    <div
      className={`border-overlay pattern-light dark:border-[#1a1a1a] ${height} ${className}`}
    />
  );
}
