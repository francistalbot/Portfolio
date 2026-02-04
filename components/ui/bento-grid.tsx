import { cn } from "@/lib/utils";

type DivProps = React.ComponentProps<"div">;

function BentoGridRoot(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto grid max-w-[var(--width-content)] grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-3 lg:grid-cols-4",
        props.className
      )}
    />
  );
}

function BentoGridItem(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        "group/bento row-span-1 flex flex-col gap-3 rounded-lg border border-border bg-white p-4 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-md)] dark:bg-card dark:border-border relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-moss before:to-terminal-green before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-[250ms]",
        props.className
      )}
    />
  );
}

function BentoGridBody(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        "",
        props.className
      )}
    />
  );
}

function BentoGridTitle(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        "text-lg mb-1 font-mono font-semibold text-bark-dark dark:text-foreground",
        props.className
      )}
      style={{ ...props.style }}
    />
  );
}

function BentoGridDescription(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        "text-sm font-serif text-bark dark:text-parchment leading-relaxed",
        props.className
      )}
      style={{ ...props.style }}
    />
  );
}

export const BentoGrid = {
  Root: BentoGridRoot,
  Item: BentoGridItem,
  Body: BentoGridBody,
  Title: BentoGridTitle,
  Description: BentoGridDescription,
};
