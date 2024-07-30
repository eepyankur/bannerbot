"use client";

import InputPill from "@/app/_components/InputPill";
import BannerTemplate from "@/app/_components/BannerTemplate";

export interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: number;
  background: string;
}

export const bannerList: Banner[] = [
  {
    id: 1,
    title: "This",
    description: "Select the banner you like!",
    cta: "I like this",
    image: 3,
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  },
  {
    id: 2,
    title: "Is",
    description: "Edit the details.",
    cta: "Lets edit",
    image: 2,
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
  },
  {
    id: 3,
    title: "Your",
    description: "Download.",
    cta: "Download",
    image: 1,
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
  },
  {
    id: 4,
    title: "Banner",
    description: "Start using your custom banner!",
    cta: "Yay!",
    image: 0,
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
  },
];

export default function BannerList() {
  return (
    <main
      className={
        "font- font-jetBrainsMono my-20 flex h-fit w-full min-w-[350px] flex-col items-center justify-center gap-20 md:min-w-[1500px]"
      }
    >
      {/*Logo*/}
      <div className={"flex w-fit flex-col"}>
        <h1
          className={
            "text-center text-5xl font-extralight tracking-widest md:text-7xl"
          }
        >
          BannerBot
        </h1>
        <span className={"pr-4 text-end text-sm font-bold uppercase italic"}>
          AI Banner Maker
        </span>
      </div>
      <InputPill />
      <div className={"grid w-3/4 grid-cols-1 gap-10 md:w-1/2 md:grid-cols-2"}>
        {bannerList.map((banner) => (
          <BannerTemplate key={banner.id} banner={banner} />
        ))}
      </div>
    </main>
  );
}
