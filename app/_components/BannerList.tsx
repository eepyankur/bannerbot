"use client";

import { useGlobalContext } from "@/app/_services/GlobalContextProvider";
import BannerTemplate from "@/app/_components/BannerTemplate";
import EditOverlay from "@/app/_components/EditOverlay";

export default function BannerList() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className={`grid w-3/4 grid-cols-1 gap-10 md:w-1/2 md:grid-cols-2`}>
      {state.bannerList.map((banner) => (
        <div
          key={banner.id}
          className={"group relative h-full w-full"}
          onClick={() =>
            dispatch({
              type: "setBannerSelected",
              payload: banner.id,
            })
          }
        >
          <BannerTemplate banner={banner} />
          <EditOverlay />
        </div>
      ))}
    </div>
  );
}
