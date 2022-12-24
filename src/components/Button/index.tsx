import clsx from "clsx";
import React from "react";

interface Props {
  label: string;
  className?: string;
}

function Button({ label, className }: Props) {
  return (
    <button className={clsx(`text-gray-900 hover:opacity-75  ${className}`)}>
      {label}
    </button>
  );
}

export default Button;
