import Button from "../Button";

const GradePanel = () => {
  const colorMap: { [key: number]: string } = {
    0: "bg-red-400",
    1: "bg-red-300",
    2: "bg-red-200",
    3: "bg-red-100",
    4: "bg-red-50",
    5: "bg-lime-50",
    6: "bg-lime-100",
    7: "bg-lime-200",
    8: "bg-lime-300",
    9: "bg-lime-400",
    10: "bg-lime-500",
  };
  return (
    <div className="flex flex-col w-full">
      {[...Array(11)].map((_, index) => (
        <Button
          key={index}
          label={String(10 - index)}
          className={colorMap[10 - index]}
        />
      ))}
    </div>
  );
};

export default GradePanel;
