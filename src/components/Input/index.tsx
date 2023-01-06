import clsx from "clsx";

interface Props {
  type?: "text" | "number" | "email" | "password";
  className?: string;
}

const Input = ({ className, type }: Props) => {
  return (
    <div className={clsx(className, "w-full")}>
      <input className="w-full px-2 py-1" type={type || "text"} />
    </div>
  );
};

export default Input;
