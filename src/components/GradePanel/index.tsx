import Button from "../Button";

const GradePanel = () => {
  // const colorMap: { [key: number]: string } = {
  //   0: "bg-gray-500",
  //   1: "bg-gray-400",
  //   2: "bg-gray-400",
  //   3: "bg-gray-300",
  //   4: "bg-gray-300",
  //   5: "bg-gray-200",
  //   6: "bg-gray-200",
  //   7: "bg-gray-100",
  //   8: "bg-gray-100",
  //   9: "bg-gray-50",
  //   10: "bg-gray-50",
  // };
  return (
    <div className="flex flex-col w-full rounded border border-gray-500 truncate">
      {[...Array(11)].map((_, index) => (
        <Button
          key={index}
          label={String(10 - index)}
          // className={colorMap[10 - index]}
          className="flex-1 text-xl bg-gray-300 border-b border-gray-500 last:border-b-0"
        />
      ))}
    </div>
  );
};

export default GradePanel;
