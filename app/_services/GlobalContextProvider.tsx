"use client";

import React, { createContext, useContext, useReducer } from "react";

export type Size = "portrait" | "landscape" | "square";

export interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  background: number;
}

const bannerList: Banner[] = [
  {
    id: 0,
    title: "This",
    description: "Select the banner you like!",
    cta: "I like this",
    background: 0,
  },
  {
    id: 1,
    title: "Is",
    description: "Edit the details.",
    cta: "Lets edit",
    background: 1,
  },
  {
    id: 2,
    title: "Your",
    description: "Download.",
    cta: "Download",
    background: 2,
  },
  {
    id: 3,
    title: "Banner",
    description: "Start using your custom banner!",
    cta: "Yay!",
    background: 3,
  },
  {
    id: 4,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 4,
  },
  {
    id: 5,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 5,
  },
  {
    id: 6,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 6,
  },
  {
    id: 7,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 7,
  },
  {
    id: 8,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 8,
  },
  {
    id: 9,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 9,
  },
  {
    id: 10,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 10,
  },
  {
    id: 11,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 11,
  },
  {
    id: 12,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 12,
  },
  {
    id: 13,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 13,
  },
  {
    id: 14,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 14,
  },
  {
    id: 15,
    title: "Title",
    description: "This is description.",
    cta: "Button",
    background: 15,
  },
];

const bannerImages: string[] = [
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/16/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/11/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/2/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/3/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/4/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/6/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/7/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/8/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/10/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/12/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/13/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/14/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
];

interface GlobalContextState {
  size: Size;
  bannerSelected: null | number;
  bannerList: Banner[];
  bannerImages: string[];
}

type GlobalContextAction =
  | { type: "setSize"; payload: Size }
  | { type: "setBannerSelected"; payload: null | number }
  | { type: "setBannerList"; payload: Banner[] }
  | { type: "setBannerImages"; payload: string[] };

interface GlobalContextType {
  state: GlobalContextState;
  // prettier-ignore
  dispatch: React.Dispatch<GlobalContextAction>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    (prevState: GlobalContextState, action: GlobalContextAction) => {
      switch (action.type) {
        case "setSize":
          return { ...prevState, size: action.payload };
        case "setBannerSelected":
          return { ...prevState, bannerSelected: action.payload };
        case "setBannerList":
          return { ...prevState, bannerList: action.payload };
        case "setBannerImages":
          return { ...prevState, bannerImages: action.payload };
        default:
          return prevState;
      }
    },
    {
      size: "square",
      bannerSelected: null,
      bannerList: bannerList,
      bannerImages: bannerImages,
    },
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === null) throw new Error("Global context is undefined");
  return context;
}

export { GlobalContextProvider, useGlobalContext };
