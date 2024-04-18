import About from "../components/About";
import Achievement from "../components/Achievement";
import Ecosystem from "../components/Ecosystem";
import Footer from "../components/Footer";
import Gaming from "../components/Gaming";
import BentoGridDemo from "../components/Infra";
import Integration from "../components/Integration";
import NewHero from "../components/NewHero";
import Roadmap from "../components/Roadmap";
import Sponsorship from "../components/Sponcership";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <>
      <NewHero />
      <Sponsorship />
      <About />
      <BentoGridDemo />
      <Achievement />
      <Gaming />
      <Integration />
      <Ecosystem />
      <Roadmap />
      <Terminal />
      <Footer />
    </>
  );
}
