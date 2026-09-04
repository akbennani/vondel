import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Audience from "./components/Audience";
import Pillars from "./components/Pillars";
import Approach from "./components/Approach";
import Sectors from "./components/Sectors";
import Leadership from "./components/Leadership";
import Story from "./components/Story";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Audience />
        <Pillars />
        <Approach />
        <Sectors />
        <Leadership />
        <Story />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
