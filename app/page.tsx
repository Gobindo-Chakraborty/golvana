import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import WIP from "@/components/ui/WIP";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <WIP />
    </>
  );
}
