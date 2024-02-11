import React from "react";

interface ButtonProps {
  colorClass: string; // Tailwindの背景色クラス（例: 'bg-blue-500'）
  label: string; // ボタンのテキスト
  onClick?: () => void; // オプショナル: ボタンがクリックされたときのイベントハンドラ
  type?: "button" | "submit" | "reset"; // 'type' プロパティの型を修正
}

const Button = ({
  colorClass,
  label,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  // 背景色クラスとベースクラスを組み合わせる
  const classes = `${baseClasses} ${colorClass}`;

  return (
    <button className={classes} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
