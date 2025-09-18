import { motion } from "framer-motion";

interface MenuIconProps {
  isOpen: boolean;
}

export const MenuIcon = ({ isOpen }: MenuIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M9.5 8.5L6 11.5L2.5 8.5"
        stroke="#10B981"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          y: isOpen ? -7 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween",
        }}
      />
      <motion.path
        d="M2.5 3.5L6 0.5L9.5 3.5"
        stroke="#10B981"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          y: isOpen ? 7 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween",
        }}
      />
    </svg>
  );
};

export const CheckAnimatedIcon = () => {
  return (
    <motion.svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.1,
        ease: [0.68, -0.55, 0.265, 1.55],
        scale: { delay: 0.2 },
      }}
    >
      <g clipPath="url(#clip0_2003_38)">
        <motion.path
          d="M1.03777 8.63483L4.14064 11.5283L11.8217 2.25459"
          stroke="
#10B981"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_38">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.276367 1.15686) rotate(-2)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const CheckStaticIcon = () => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2003_38)">
        <path
          d="M1.03777 8.63483L4.14064 11.5283L11.8217 2.25459"
          stroke="#10B981"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_38">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.276367 1.15686) rotate(-2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
