import FeaturedSection from "@/components/FeaturedSection";
import ForexFaq from "@/components/ForexFaq";
import ForexPerformance from "@/components/ForexPerformance";
import HeroSection from "@/components/hero-slider/HeroSection";
import HeroSectionThree from "@/components/hero-slider/HeroSectionThree";
import HeroSectionTwo from "@/components/hero-slider/HeroSectionTwo";
import HeroSlider from "@/components/hero-slider/HeroSlider";
import MarketCategories from "@/components/MarketCategories";
import TrustedByTraders from "@/components/TrustedByTraders";
import WhyChooseUs from "@/components/WhyChooseUs";



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
      {/* <HeroSectionThree/>  */}
      <HeroSlider/>

      <FeaturedSection/>
      <MarketCategories/>
      <WhyChooseUs/>
      <TrustedByTraders/>
      <ForexPerformance/>
      <ForexFaq/>
    </div>
  );
}
