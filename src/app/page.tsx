import ForexFaq from "@/components/ForexFaq";
import ForexPerformance from "@/components/ForexPerformance";
import HeroSection from "@/components/HeroSection";
import MarketCategories from "@/components/MarketCategories";
import TrustedByTraders from "@/components/TrustedByTraders";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {

  let age: number = 24;
  age = 20


  interface userT {
    name: string,
    age: number,
    isRich?: boolean
  }

  const user: userT = {
    name: "Apurbo Chaki",
    age: 24,
    isRich: false
  }





  return (
    <div className="">
      <HeroSection/>
      <MarketCategories/>
      <WhyChooseUs/>
      <TrustedByTraders/>
      <ForexPerformance/>
      <ForexFaq/>
    </div>
  );
}
