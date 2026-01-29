import { Icons } from "@/components/ui/icons";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface PillProps {
  name: string;
  url?: string;
  icon?: keyof typeof Icons;
  className?: string;
  size?: "default" | "small" | "large";
}
const pillVariants = cva(
  "flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-gray-900 dark:text-white font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors",
  {
    variants: {
    size:{
      default: "px-3 py-1 text-base rounded-lg",
      small: "px-2 py-1 text-sm rounded-full",
      large: "px-4 py-2 text-lg rounded-lg",
    }
  },
  defaultVariants: {
    size: "default",
  },
}
);
export const Pill = ({
  name,
  url,
  icon,
  className,
  size = "default",
  ...props
}: React.ComponentProps<"a"> & PillProps) => {
  const IconComponent = icon ? Icons[icon] : undefined;
  const content = (
    <>
      {IconComponent && <IconComponent className="size-4" />}
      <span className="text-gray-900 dark:text-white font-medium">{name}</span>
    </>
  );
  if (url) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        title={name}
        {...props}

        className={cn(pillVariants({ size, className }))}
      >
        {content}
      </a>
    );
  }
  return (
    <span
      title={name}
      className={cn(pillVariants({ size, className }))}
      {...props}
    >
      {content}
    </span>
  );
};
