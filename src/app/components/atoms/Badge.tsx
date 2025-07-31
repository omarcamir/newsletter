type BadgeProps = { title: string; category: string };

const categoryStyles: Record<string, string> = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

const Badge = ({ title, category }: BadgeProps) => {
  const bgClass = categoryStyles[category] || "bg-gray-300"; // fallback if category not found
  return (
    <div className={`${bgClass} text-white px-2 py-1 rounded`}>{title}</div>
  );
};

export default Badge;
