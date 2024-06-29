import About from "src/components/About";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import Portfolio from "src/components/Portfolio";
import Services from "src/components/Services";
import Workflow from "src/components/Workflow";

export default function Home() {
  return (
    <main className="mx-7">
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Services/>
      <Workflow/>
    </main>
  );
}
