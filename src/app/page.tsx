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

export default function Home() {
  return (
    <>
      <main className="flex flex-col overflow-x-hidden items-center px-5 md:px-9 py-4 md:py-11 bg-neutral-900 mx-auto w-full max-w-[90rem]">
        <Header />
        <Hero />
        <Gaming />
        <Platform />
        <Achievement />
        <Integration />
        <Ecosystem />
        <Roadmap />
        <Terminal />
        <Footer />
      </main>
    </>
  );
}
