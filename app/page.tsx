import BannerEditTemplate from "@/app/_components/BannerEditTemplate";
import Logo from "@/app/_components/Logo";
import InputPill from "@/app/_components/InputPill";
import BannerList from "@/app/_components/BannerList";

export default function Home() {
  return (
    <main
      className={
        "relative flex h-dvh w-full min-w-[350px] flex-col items-center gap-20 overflow-auto py-40 font-jetBrainsMono md:min-w-[1500px]"
      }
    >
      <Logo />
      <InputPill />
      <BannerList />
      <BannerEditTemplate />
    </main>
  );
}
