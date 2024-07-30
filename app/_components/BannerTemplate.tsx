"use client";

import type { Banner } from "@/app/_components/BannerList";
import { useGlobalContext } from "@/app/_services/GlobalContextProvider";
import BannerEditTemplate from "@/app/_components/BannerEditTemplate";

interface BannerTemplateProps {
  banner: Banner;
}

const bannerImages: string[] = [
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
];

export default function BannerTemplate({ banner }: BannerTemplateProps) {
  const { state, dispatch } = useGlobalContext();
  return (
    <>
      <div
        className={`relative rounded-3xl transition-transform duration-200 ease-linear hover:scale-105 ${state.size === "square" && "aspect-square"} ${state.size === "portrait" && "aspect-[5/7]"} ${state.size === "landscape" && "aspect-[10/5]"} w-full bg-red-950`}
        style={{
          backgroundImage: `url(${banner.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={
            "relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
          }
        >
          <div
            className={`absolute z-0 aspect-square h-2/3 rounded-full border-8 bg-white grayscale ${state.size === "square" && "-bottom-10 -right-20"} ${state.size === "portrait" && "-bottom-10 left-1/4"} ${state.size === "landscape" && "-bottom-5 -right-5"} `}
            style={{
              backgroundImage: `url(${bannerImages[banner.image]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <h2
            className={`absolute z-[1] text-2xl font-extrabold tracking-widest text-yellow-500 md:text-5xl ${state.size === "square" && "left-5 top-10 md:left-16 md:top-20"} ${state.size === "portrait" && "left-10 top-20 md:left-10 md:top-20"} ${state.size === "landscape" && "left-5 top-5 md:left-20 md:top-5"} `}
          >
            {banner.title}
          </h2>
          <p
            className={`absolute z-[1] w-full text-balance bg-slate-200 p-2 text-sm font-medium text-green-500 md:text-lg ${state.size === "square" && "left-0 md:left-10 md:top-40"} ${state.size === "portrait" && "left-0 md:left-10 md:top-40"} ${state.size === "landscape" && "left-0 md:left-10 md:top-20"} `}
          >
            {banner.description}
          </p>
          <div
            className={`absolute z-[1] text-nowrap bg-black px-4 py-2 text-xs tracking-wider text-rose-600 drop-shadow-[5px_5px_rgba(225,29,72,1)] md:text-lg ${state.size === "square" && "bottom-10 left-10 md:bottom-20 md:left-20"} ${state.size === "portrait" && "bottom-10 left-10 md:bottom-40 md:left-20"} ${state.size === "landscape" && "bottom-5 left-10 md:bottom-5 md:left-20"} `}
          >
            {banner.cta}
          </div>
        </div>
        <div
          className={
            "absolute left-0 top-0 z-[2] flex h-full w-full items-center justify-center rounded-3xl opacity-0 transition-opacity duration-200 ease-linear hover:opacity-100"
          }
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
          }}
          onClick={() => dispatch({ type: "setEdit", payload: true })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={100}
            width={100}
          >
            <g fill="none">
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0z"
              />
              <path fill="white" d="m5 16l-1 4l4-1L18 9l-3-3z" />
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m15 6l3 3m-5 11h8"
              />
            </g>
          </svg>
        </div>
      </div>
      <BannerEditTemplate />
    </>
  );
}
