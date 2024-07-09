import Body from "src/components/Body";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

export default function Home() {
  return (
    <main className="m-5 gap-5 flex flex-col">
      <Header/>
      <Body/>
      <Footer/>
    </main>
  );
}
