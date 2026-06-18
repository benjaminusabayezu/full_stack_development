

const Button = ({
    children,
    type="button",
    variant ="primary",
    size ="md",
    disabled= false,
    onClick}) => {

        const variants={
            primary:"bg-yellow-600 hover:bg-yellow-700 text-stone-200",
            secondary:"bg-stone-400 hover:bg-stone-300 text-stone-900",
            danger:"bg-pink-500 hover:bg-pink-600 text-white",
            success:"bg-lime-700 hover:bg-lime-600 text-stone-300",
            outline:"border border-yellow-600 hover:bg-yellow-600 hover:text-stone-200"
        };

        const sizes ={
            sm: "py-4 px-3 text-sm",
            md: "px-4 py-3 w-full",
            lg:"px-6 py-4 text-lg",
        };
  return (
    
    <button

    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`items-center justify-center rounded-full font-medium transition-colors duration-300  ${variants[variant]}
    ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed": "cursor-pointer"}`}
   >
          {children}

    </button>
  );
};

export default Button;