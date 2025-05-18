export function Button({ children, className, ...props }) {
    return (
      <button
        className={`bg-[#ff5631] hover:bg-[#e64a27] text-white text-sm px-6 py-3 rounded-md ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  