import Achievement from "./components/Achievement";
import Ecosystem from "./components/Ecosystem";
import Gaming from "./components/Gaming";
import Hero from "./components/Hero";
import Integration from "./components/Integration";
import Platform from "./components/Platform";
import Roadmap from "./components/Roadmap";
import Terminal from "./components/Terminal";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { achievementData } from "./components/Achievement";
import About from "./components/About";
import Products from "./components/Products";
import NewHero from "./components/NewHero";
import NewHero2 from "./components/NewHero2";
import WhatWeOffer from "./components/WhatWeOffer";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <NewHero /> */}
      {/* <NewHero2 /> */}
      <div className="md:mt-6  mt-auto">
        <InfiniteMovingCards
          direction="right"
          speed="fast"
          items={achievementData}
        />
      </div>
      <About />
      <Products />
      <WhatWeOffer />
      <Gaming />
      {/* <Platform /> */}
      <Achievement />
      <Integration />
      <Ecosystem />
      <Roadmap />
      <Terminal />
    </>
  );
}
