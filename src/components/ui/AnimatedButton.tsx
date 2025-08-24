const AnimatedButton: React.FC<{
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
  }> = ({ children, variant = "primary", onClick, className = "" }) => {
    const baseClasses =
      "px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 flex items-center group";
  
    const primaryClasses = `${baseClasses} text-white hover:shadow-lg transform hover:scale-[1.02] bg-gradient-to-br from-nordic-primary to-nordic-secondary`;
    const secondaryClasses = `${baseClasses} border-2 border-nordic-primary text-nordic-primary bg-transparent hover:shadow-lg transform hover:scale-[1.02] hover:bg-nordic-primary hover:text-white transition-colors`;
  
    const classes = variant === "primary" ? primaryClasses : secondaryClasses; return (
      <button className={`${classes} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };
export { AnimatedButton }