import clsx from "clsx";
import React from "react";

interface Props {
  label: string;
  className?: string;
}

function Button({ label, className }: Props) {
  return (
    <button
      className={clsx(
        `text-gray-900 hover:bg-gray-400 hover:text-black  ${className}`
      )}
    >
      {label}
    </button>
  );
}

export default Button;
