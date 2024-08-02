"use client";

import {
  type Size,
  useGlobalContext,
} from "@/app/_services/GlobalContextProvider";

export default function InputPill() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div
      className={
        "flex w-3/4 flex-col items-center justify-evenly gap-5 rounded-xl border-2 p-2 md:w-1/2 md:flex-row"
      }
    >
      <input
        type="text"
        className={"w-full p-2 text-center focus:outline-0 md:text-start"}
        name="text"
        placeholder="Enter prompt"
      />
      <button
        className={
          "rounded-lg border-2 px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ease-linear hover:bg-stone-100"
        }
      >
        Generate
      </button>
      <div className={"flex items-center justify-center gap-5 p-2"}>
        <span className={"select-none text-nowrap text-stone-400"}>Size</span>
        <select
          className={"p-1 focus:outline-0"}
          value={state.size}
          onChange={(e) =>
            dispatch({
              type: "setSize",
              payload: e.target.value as Size,
            })
          }
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
          <option value="square">Square</option>
        </select>
      </div>
    </div>
  );
}
