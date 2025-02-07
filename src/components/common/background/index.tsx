import Image from "next/image";

const MainBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full max-h-[806px] z-[-1] select-none">
      <Image
        src="/images/header.png"
        alt="image"
        className="w-full h-full object-cover object-top select-none pointer-events-none lg:opacity-15"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default MainBackground;
