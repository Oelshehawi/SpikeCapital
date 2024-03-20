import clsx from "clsx";

interface ButttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ className, children, ...rest }: ButttonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 text-white transition-all duration-150 ease-in-out",
        "bg-primary",
        "hover:bg-gradient-to-r hover:from-[#2a2d31] hover:to-[#2f4b5e]",
        "active:bg-gradient-to-r active:from-[#161514] active:to-[#1a323f]",
        "focus:outline-none focus:ring-2 focus:ring-[#2a6d5f] focus:ring-offset-2 focus:ring-offset-[#1d3b4f]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
