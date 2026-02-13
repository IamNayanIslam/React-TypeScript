type ButtonProps = {
  children: React.ReactNode;
  bg: "green" | "blue" | "red";
  text: string;
};

const Button = ({ children, bg, text }: ButtonProps) => {
  const bgColor = {
    green: "bg-green-600",
    blue: "bg-blue-600",
    red: "bg-red-600",
  };

  const textColor = `text-${text}`;
  return (
    <button
      className={`font-bold text-center rounded-md px-4 py-2 ${bgColor[bg]} text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
