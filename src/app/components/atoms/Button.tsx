const Button = ({
  onClick,
  title,
  disabled,
}: {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer duration-200 transition-all 
        ${!disabled && "hover:bg-gray-300"}`}
    >
      {title}
    </button>
  );
};

export default Button;
