import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Resume from "@/components/Resume";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-teal flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="z-50 w-full"/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Resume />
      </div>
      <Footer />
    </main>
  );
}
