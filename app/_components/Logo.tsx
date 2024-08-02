export default function Logo() {
  return (
    <div className={"flex w-fit select-none flex-col"}>
      <h1
        className={
          "text-center text-5xl font-extralight tracking-widest md:text-7xl"
        }
      >
        BannerBot
      </h1>
      <p className={"pr-4 text-end text-sm font-bold uppercase italic"}>
        AI Banner Maker
      </p>
    </div>
  );
}
