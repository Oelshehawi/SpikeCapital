import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ className, children, ...rest } : ButtonProps) => {
  return (
    <button
      className={clsx(
        "relative overflow-hidden rounded-lg border-[1px] px-4 py-2 font-semibold uppercase transition-all duration-500 ease-in-out",
        "border-primary text-primary-content bg-primary",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-primary-dark before:transition-transform before:duration-1000 before:content-['']",
        "hover:scale-105 hover:text-neutral-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const LearnButton = ({ className, children, ...rest } : ButtonProps) => {
  return (
    <button
      className={clsx(
        "relative overflow-hidden rounded-lg border-[1px] font-semibold uppercase text-secondary transition-all duration-500 ease-in-out",
        "border-secondary bg-secondary-content",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-secondary-light before:transition-transform before:duration-1000 before:content-['']",
        "hover:scale-105 hover:text-neutral-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95",
        className
      )}
    >
      <span>{children}</span>
    </button>
  );
};