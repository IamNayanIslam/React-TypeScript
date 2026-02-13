type ButtonProps = {
  children: React.ReactNode;
  buttonStyle: {
    hoverBg: string;
    hoverText: string;
    text: string;
    border: string;
  };
};

const Button = ({ children, buttonStyle }: ButtonProps) => {
  const { border, hoverBg, text, hoverText } = buttonStyle;
  return (
    <button
      className={`font-bold text-center rounded-md px-4 py-2 bg-white border ${border} rounded-md duration-300 ${hoverBg} ${text} ${hoverText}`}
    >
      {children}
    </button>
  );
};

export default Button;
