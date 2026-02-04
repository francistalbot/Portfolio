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
  "flex items-center gap-1.5 font-mono text-moss dark:text-sage hover:bg-moss hover:text-white dark:hover:bg-sage dark:hover:text-bark-dark transition-all duration-[250ms] ease-out",
  {
    variants: {
    size:{
      default: "px-2.5 py-1 text-xs rounded-md bg-moss/8 dark:bg-sage/10",
      small: "px-2 py-0.5 text-[0.65rem] rounded bg-moss/8 dark:bg-sage/10",
      large: "px-3 py-1.5 text-sm rounded-md bg-moss/8 dark:bg-sage/10",
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
      <span className="font-mono">{name}</span>
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
