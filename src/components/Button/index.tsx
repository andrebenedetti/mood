import clsx from "clsx";

interface Props {
  label: string;
  className?: string;
}
const Button = ({ label, className }: Props) => {
  return <button className={clsx(className, "py-1 px-2")}>{label}</button>;
};

export default Button;
