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
import Sponsorship from "./components/Sponcership";
import BentoGridDemo from "./components/Infra";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <NewHero /> */}
      {/* <NewHero2 /> */}
      <Sponsorship />
      {/* <Products /> */}
      {/* <WhatWeOffer /> */}
      <About />
      <BentoGridDemo />
      {/* <Platform /> */}
      <Achievement />
      <Gaming />
      <Integration />
      <Ecosystem />
      <Roadmap />
      <Terminal />
    </>
  );
}
