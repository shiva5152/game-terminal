import Hero from "./components/Hero";
import Header from "./components/Header";
import Gaming from "./components/Gaming";
import Platform from "./components/Platform";
import Achievement from "./components/Achievement";
import Integration from "./components/Integration";
import Ecosystem from "./components/Ecosystem";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Wrapper from "./components/ui/wrapper";

export default function Home() {
  return (
    <>
      <main className="flex flex-col overflow-x-hidden items-center w-full py-4 md:py-11 bg-neutral-900 mx-auto ">
        <Wrapper>
          <Header />
          <Hero />
          <Gaming />
          <Platform />
        </Wrapper>
        <Achievement />
        <Wrapper>
          <Integration />
          <Ecosystem />
          <Roadmap />
          <Terminal />
          <Footer />
        </Wrapper>
      </main>
    </>
  );
}
