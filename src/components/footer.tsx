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

      <div className=" w-full flex justify-between items-center">
        <div>
          <p>&copy; 2025 Ashraful Haque Rana. All rights reserved.</p>
        </div>

        {/* footer cart */}

        <div className="flex gap-5 my-3">
          <Card
            className="border rounded-md p-2"
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
            className="border rounded-md p-2"
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link target="_blank" href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              aria-hidden="true"
              className="w-[32px] h-[32px] fill-current text-lg"
            >
              <path d="M298.158 216.797 484.663 0h-44.196L278.525 188.242 149.182 0H0l195.592 284.655L0 512h44.198l171.016-198.79L351.809 512h149.182L298.147 216.797zm-60.536 70.366-19.818-28.345L60.124 33.272h67.885L255.26 215.295l19.817 28.345 165.411 236.601h-67.886l-134.98-193.067z"></path>
            </svg>
            </Link>{" "}
          </Card>

          <Card
            className="border rounded-md p-2"
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

          <Card
            className="border rounded-md p-2"
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <Link target="_blank" href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="32"
              height="32"
              aria-hidden="true"
              className="w-[32px] h-[32px] fill-current text-lg"
            >
              <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1S23.8 74.5 17.3 91c-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6s28.1 22.6 44.6 29.1c16 6.2 34.3 10.5 61.2 11.7s35.4 1.5 103.9 1.5 77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1s22.6-28.1 29.1-44.6c6.2-16 10.5-34.3 11.7-61.2s1.5-35.4 1.5-103.9-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6s-28.1-22.6-44.6-29.1C405.2 11 386.9 6.7 360 5.5c-27-1.1-35.6-1.4-104-1.4"></path>
              <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4m0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84"></path>
              <circle cx="390.5" cy="121.5" r="30.2"></circle>
            </svg>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Footer;
