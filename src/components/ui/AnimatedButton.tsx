// This interface defines all the properties (props)
interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}
// Parameter destructuring and default values
function AnimatedButton({
  children,
  variant = "primary",
  onClick,
  className = "",
}: AnimatedButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 flex items-center group";
  const primaryClasses = `${baseClasses} text-white hover:shadow-lg transform hover:scale-[1.02] bg-gradient-to-br from-nordic-primary to-nordic-secondary`;
  const secondaryClasses = `${baseClasses} border-2 border-nordic-primary text-nordic-primary bg-transparent hover:shadow-lg transform hover:scale-[1.02] hover:bg-nordic-primary hover:text-white transition-colors`;
  const classes = variant === "primary" ? primaryClasses : secondaryClasses; //Conditional style selection
  return (
    //Use template literals to concatenate the internal default CSS class names (classes) and the external custom class names (className) to generate the final className attribute value.
    <button className={`${classes} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export { AnimatedButton };
