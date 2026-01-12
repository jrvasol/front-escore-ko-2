"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variantClasses = {
    primary: "bg-[#c8ff01] text-black hover:bg-[#b8ef00] hover:shadow-[0_0_20px_rgba(200,255,1,0.4)] active:scale-[0.98]",
    secondary: "bg-[#1a1a1a] text-white border border-[#404040] hover:border-[#525252] hover:bg-[#141414] active:scale-[0.98]",
    text: "text-gray-300 hover:text-white underline-offset-4 hover:underline",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: variant === "primary" ? 1.02 : 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
