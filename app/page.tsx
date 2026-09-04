import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pillars from "./components/Pillars";
import Approach from "./components/Approach";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Approach />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
