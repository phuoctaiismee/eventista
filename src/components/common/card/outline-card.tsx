import { cn } from "@/lib/utils";

const CardOutline = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="backdrop-blur-lg bg-opacity-[6%] rounded-2xl p-[0.5px] overflow-hidden  bg-gradient-to-b from-[#E6CAA4] to-[#E9B84E] ">
      <div className={cn("bg-[#141f38] rounded-2xl w-full flex", props.className)}>
        {children}
      </div>
    </div>
  );
};

export default CardOutline;
