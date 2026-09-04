import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TrustedBy from "./components/TrustedBy";
import Audience from "./components/Audience";
import Pillars from "./components/Pillars";
import Approach from "./components/Approach";
import Community from "./components/Community";
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
        <TrustedBy />
        <Audience />
        <Pillars />
        <Approach />
        <Community />
        <Leadership />
        <Story />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
