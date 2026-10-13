import React from "react";

interface CompanyLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  alt?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = "",
  size = "md",
  alt = "COPS NIGHT PATROLLING SERVICES Official Logo"
}) => {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const finalClass = className || sizeClasses[size];

  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`inline-block object-contain drop-shadow-sm select-none shrink-0 ${finalClass}`}
      loading="eager"
    />
  );
};
