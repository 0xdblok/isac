import Image from "next/image";
import Hero from "./component/hero";
import Footer from "./component/footer";
import About from "./component/about";
import Buy from "./component/buy";

export default function Home() {
  return (
    <div className="px-6 bg-[#FDD187]">
      <Hero />
      <About />
      <Buy />
      <Footer />
    </div>
  );
}
