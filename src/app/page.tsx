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

export default function Home() {
  return (
    <>
      <Hero />
      <div className="md:mt-6  mt-auto">
        <InfiniteMovingCards
          direction="right"
          speed="fast"
          items={achievementData}
        />
      </div>
      <About />
      <Products />
      <Gaming />
      <Platform />
      <Achievement />
      <Integration />
      <Ecosystem />
      <Roadmap />
      <Terminal />
    </>
  );
}
