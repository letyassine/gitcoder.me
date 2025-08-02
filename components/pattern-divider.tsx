interface PatternDividerProps {
  height?: string;
  className?: string;
}

export default function PatternDivider({
  height = "h-[65px]",
  className = "border-y",
}: PatternDividerProps) {
  return <div className={`border-overlay pattern-1 ${height} ${className}`} />;
}
