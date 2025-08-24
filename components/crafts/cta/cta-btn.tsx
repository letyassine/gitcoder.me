import styles from "./cta-btn.module.css";

const ArrowDown = (
  <svg
    className={styles.arrow}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CtaButton({ children, ...props }: CtaButtonProps) {
  return (
    <button {...props} className={styles.btn}>
      <div className="flex">
        <span className={styles.arrows}>
          {ArrowDown}
          {ArrowDown}
        </span>
      </div>
      <div className={styles.text}>
        <p>{children}</p>
        <p>{children}</p>
      </div>
      <div className={styles.bg} />
    </button>
  );
}
