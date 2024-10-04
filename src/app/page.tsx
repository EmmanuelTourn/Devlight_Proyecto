
import Hero from "./components/Hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <Navbar/>
      <Hero/>
    </div>
  );
}
