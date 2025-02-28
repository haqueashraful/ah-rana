import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-rn pt-20 pb-5 w-full mx-auto">
      <div className="w-full flex flex-col justify-center items-center ">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl text-primary font-semibold uppercase logo">
            Ashraful
          </span>
        </Link>

        <div className="flex items-center justify-center gap-2">
          <Mail />
          <p>123ashrafulhaque@gmail.com</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-black dark:bg-white h-[.1px] my-2" />

      <div className=" w-full flex justify-between items-center py-3">
        <p>&copy; 2023 Ashraful Haque Rana. All rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;
