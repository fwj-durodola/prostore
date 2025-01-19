import Image from "next/image";
import loadingImage from "@/assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Image src={loadingImage} width={150} height={150} alt="Loaing..." />
    </div>
  );
};

export default Loader;