import React from "react";

type BadgeProps = { title: string; category: string };

const colorClasses = [
  "bg-blue-500",
  "bg-gray-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
];

const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};

const Badge = ({ title }: BadgeProps) => {
  const bgClass = getRandomColorClass();

  return (
    <span className={`${bgClass} text-white px-2 py-1 text-xs`}>{title}</span>
  );
};

export default Badge;
