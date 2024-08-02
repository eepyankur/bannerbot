"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  type Banner,
  useGlobalContext,
} from "@/app/_services/GlobalContextProvider";
import BannerTemplate from "@/app/_components/BannerTemplate";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";

export default function BannerEditTemplate() {
  const { state, dispatch } = useGlobalContext();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [banner, setBanner] = useState<Banner | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cta, setCta] = useState<string>("");
  const [background, setBackground] = useState<number>(0);

  const downloadDivRef = useRef(null);

  // loads selected banner
  useEffect(() => {
    if (state.bannerSelected === null) return;
    setBanner(state.bannerList[state.bannerSelected]);
  }, [state.bannerList, state.bannerSelected]);

  // loads selected banner's details
  useEffect(() => {
    if (!banner) return;
    setTitle(banner.title);
    setDescription(banner.description);
    setCta(banner.cta);
    setBackground(banner.background);
  }, [banner]);

  return (
    <AnimatePresence>
      {state.bannerSelected !== null && banner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={
            "fixed left-0 top-0 flex h-full w-full items-center justify-around overscroll-none bg-gradient-to-t from-black/50 backdrop-blur-[2px]"
          }
        >
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={
              "relative flex h-[80%] w-[80%] flex-col overflow-auto rounded-3xl bg-white md:flex-row"
            }
          >
            {/*demo-left*/}
            <div
              className={
                "relative flex flex-col items-center justify-center gap-2 p-10 md:h-full md:w-1/2"
              }
              ref={downloadDivRef}
            >
              <BannerTemplate
                banner={{
                  id: banner.id,
                  title: title,
                  description: description,
                  cta: cta,
                  background: background,
                }}
              />
              <p className={"text-balance text-center text-xs text-stone-400"}>
                Image Attribution:{" "}
                <span className={"italic"}>
                  Photo by{" "}
                  <a
                    className={"text-blue-500"}
                    target={"_blank"}
                    href="https://unsplash.com/"
                  >
                    XYZ
                  </a>{" "}
                  on{" "}
                  <a
                    className={"text-blue-500"}
                    target={"_blank"}
                    href="https://unsplash.com/"
                  >
                    Unsplash
                  </a>
                </span>
              </p>
            </div>
            {/*edit-right*/}
            <div className="flex h-fit w-full flex-col items-center justify-evenly gap-10 py-5 md:h-full md:w-1/2 md:gap-2 md:overflow-auto">
              <p className="mb-5 text-stone-400">Edit Banner</p>
              {/*edit-image*/}
              <div className={"flex w-3/4 flex-col"}>
                <h3 className={"p-1 text-lg text-stone-400"}>Image</h3>
                <div
                  className={
                    "flex h-32 cursor-pointer items-center gap-2 overflow-x-auto overflow-y-hidden"
                  }
                >
                  <div
                    className="aspect-square h-20 rounded-full border-2 p-2"
                    onClick={() => {
                      fileInputRef.current?.click();
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="black"
                        d="M22 16v-1c0-2.829 0-4.242-.879-5.121C20.242 9 18.828 9 16 9H8c-2.83 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.998V16c0 2.828 0 4.242.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.242 22 18.828 22 16"
                        opacity="0.5"
                      />
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={(e) => {
                        if (e.target.files && state.bannerSelected !== null) {
                          dispatch({
                            type: "setBannerImages",
                            payload: [
                              ...state.bannerImages.slice(0, background),
                              URL.createObjectURL(e.target.files[0]),
                              ...state.bannerImages.slice(background + 1),
                              state.bannerImages[background],
                            ],
                          });
                        }
                        setBackground(background);
                      }}
                    />
                  </div>
                  {state.bannerImages.map((image, index) => (
                    <div
                      className={`relative aspect-square h-20 overflow-clip rounded-full transition-[height] duration-300 ease-in-out ${index === background && "h-24"}`}
                      key={index}
                    >
                      <Image
                        fill
                        sizes={"100%"}
                        loading={"eager"}
                        alt={"background"}
                        src={image}
                        className={"object-cover"}
                        onClick={() => setBackground(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/*edit-title*/}
              <div className={"flex w-3/4 flex-col gap-2"}>
                <h3 className={"p-1 text-lg text-stone-400"}>Title</h3>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className={"w-full rounded border-2 p-2 focus:outline-0"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/*edit-description*/}
              <div className={"flex w-3/4 flex-col gap-2"}>
                <h3 className={"p-1 text-lg text-stone-400"}>Description</h3>
                <input
                  type="text"
                  placeholder="Enter Description"
                  className={"w-full rounded border-2 p-2 focus:outline-0"}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/*edit-button*/}
              <div className={"flex w-3/4 flex-col gap-2"}>
                <h3 className={"p-1 text-lg text-stone-400"}>Button</h3>
                <input
                  type="text"
                  placeholder="Enter Button CTA"
                  className={"w-full rounded border-2 p-2 focus:outline-0"}
                  value={cta}
                  onChange={(e) => setCta(e.target.value)}
                />
              </div>
              <div
                className={
                  "flex w-full flex-col items-center justify-center gap-2"
                }
              >
                <button
                  className={
                    "w-1/2 rounded-xl bg-stone-200 p-4 text-lg font-bold tracking-wider"
                  }
                  onClick={() => {
                    if (state.bannerSelected !== null)
                      dispatch({
                        type: "setBannerList",
                        payload: [
                          ...state.bannerList.slice(0, state.bannerSelected),
                          {
                            id: banner.id,
                            title: title,
                            description: description,
                            cta: cta,
                            background: background,
                          },
                          ...state.bannerList.slice(state.bannerSelected + 1),
                        ],
                      });
                    dispatch({ type: "setBannerSelected", payload: null });
                  }}
                >
                  Save
                </button>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    (async () => {
                      if (downloadDivRef.current) {
                        const dataURL = await toPng(downloadDivRef.current, {
                          cacheBust: true,
                        });
                        const link = document.createElement("a");
                        link.download = "banner.png";
                        link.href = dataURL;
                        link.click();
                      }
                    })();
                  }}
                  className={"text-sm text-blue-500"}
                >
                  Download
                </a>
              </div>
            </div>
            {/*clear button*/}
            <motion.button
              whileHover={{ rotate: 90 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={
                "absolute right-5 top-5 h-10 w-10 rounded-full bg-stone-200 p-1"
              }
              onClick={() =>
                dispatch({
                  type: "setBannerSelected",
                  payload: null,
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
