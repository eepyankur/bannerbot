"use client";

import {
  type Banner,
  useGlobalContext,
} from "@/app/_services/GlobalContextProvider";

export default function BannerTemplate({ banner }: { banner: Banner }) {
  const { state } = useGlobalContext();

  return (
    <div
      className={`relative flex select-none flex-col items-center justify-evenly overflow-clip rounded-3xl transition-transform duration-200 ease-linear group-hover:scale-105 ${state.size === "square" && "aspect-square w-full"} ${state.size === "portrait" && "aspect-[5/7] w-full md:h-full md:w-auto"} ${state.size === "landscape" && "aspect-[10/5] w-full"}`}
      style={{
        backgroundImage: `url(${state.bannerImages[banner.background]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className={`ml-10 self-start text-2xl font-extrabold tracking-widest text-yellow-500 underline underline-offset-8 md:text-7xl`}
      >
        {banner.title}
      </h2>
      <p
        className={`min-h-10 w-full overflow-clip text-balance bg-slate-200 p-2 text-center text-sm font-medium text-green-500 md:text-base`}
      >
        {banner.description}
      </p>

      <div
        className={`mr-20 min-h-10 self-end text-nowrap bg-black px-4 py-2 text-xs tracking-wider text-rose-600 drop-shadow-[5px_5px_rgba(225,29,72,1)] md:text-lg`}
      >
        {banner.cta}
      </div>
    </div>
  );
}
