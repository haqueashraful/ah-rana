import { Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";

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

      <div className=" w-full flex flex-col lg:flex-row justify-between items-center">
        <div>
          <p>&copy; 2025 Ashraful Haque Rana. All rights reserved.</p>
        </div>

        {/* footer cart */}

        <div className="flex gap-5 my-3">
          <Card
            className="border rounded-md p-2 "
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link target="_blank" href={"https://github.com/haqueashraful"}>
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle fill-current text-lg"
              >
                <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
              </svg>{" "}
            </Link>{" "}
          </Card>

          <Card
            className="border rounded-md p-2 "
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
          >
            <Link target="_blank" href={"https://www.facebook.com/haquerana4"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                aria-hidden="true"
                className="w-[32px] h-[32px] fill-current text-lg"
              >
                <path d="M501 257.5c0-135.3-109.7-245-245-245S11 122.2 11 257.5c0 122.3 89.6 223.6 206.7 242V328.3h-62.2v-70.8h62.2v-54c0-61.4 36.6-95.3 92.5-95.3 26.8 0 54.8 4.8 54.8 4.8v60.3h-30.9c-30.4 0-39.9 18.9-39.9 38.3v46h67.9l-10.9 70.8h-57.1v171.2C411.4 481.1 501 379.8 501 257.5"></path>
              </svg>
            </Link>
          </Card>

          <Card
            className="border rounded-md p-2 "
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link target="_blank" href={"https://www.linkedin.com/in/a-h-rana"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                aria-hidden="true"
                className="w-[32px] h-[32px] fill-current text-lg"
              >
                <path d="M436.2 436.3h-75.9V317.4c0-28.3-.5-64.8-39.5-64.8-39.5 0-45.6 30.9-45.6 62.7v120.9h-75.9V191.9h72.8v33.4h1c7.3-12.5 17.8-22.7 30.5-29.7 12.7-6.9 27-10.3 41.4-9.8 76.9 0 91.1 50.6 91.1 116.4zM113.9 158.5c-8.7 0-17.2-2.6-24.5-7.4-7.2-4.8-12.9-11.7-16.2-19.8s-4.2-16.9-2.5-25.4 5.9-16.4 12-22.5c6.2-6.2 14-10.4 22.5-12.1s17.4-.8 25.4 2.5 14.9 9 19.8 16.2c4.8 7.2 7.4 15.7 7.4 24.5 0 5.8-1.1 11.5-3.3 16.8s-5.5 10.2-9.5 14.3c-4.1 4.1-8.9 7.3-14.3 9.5-5.3 2.3-11 3.4-16.8 3.4m37.9 277.8H75.9V191.9h75.9zM474.1 0H37.8c-9.9-.1-19.4 3.7-26.5 10.6S.1 27 0 36.9V475c.1 9.9 4.2 19.4 11.2 26.3 7.1 6.9 16.6 10.8 26.5 10.7H474c9.9.1 19.5-3.7 26.6-10.6s11.2-16.4 11.3-26.3V36.9c-.1-9.9-4.2-19.4-11.3-26.3S484-.1 474.1 0"></path>
              </svg>
            </Link>
          </Card>

          <Card
            className="border rounded-md p-2"
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Link target="_blank" href={"#"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 17 13"
                aria-hidden="true"
                className="w-[32px] h-[32px] fill-current text-lg"
              >
                <path d="M14.4 1.079A14 14 0 0 0 10.894 0a10 10 0 0 0-.449.913 13 13 0 0 0-3.892 0A10 10 0 0 0 6.102 0c-1.211.207-2.391.57-3.51 1.082C.374 4.366-.227 7.568.073 10.725c1.3.96 2.755 1.69 4.302 2.16q.523-.705.92-1.486a9 9 0 0 1-1.45-.693q.183-.133.356-.267a10.1 10.1 0 0 0 8.6 0q.175.144.356.267a9 9 0 0 1-1.454.694q.398.782.922 1.484a14.1 14.1 0 0 0 4.304-2.158c.353-3.66-.603-6.834-2.527-9.647M5.677 8.783c-.838 0-1.531-.76-1.531-1.696s.669-1.704 1.528-1.704c.86 0 1.547.768 1.533 1.704s-.676 1.696-1.53 1.696m5.648 0c-.84 0-1.53-.76-1.53-1.696s.669-1.704 1.53-1.704 1.543.768 1.528 1.704-.674 1.696-1.528 1.696"></path>
              </svg>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Footer;
