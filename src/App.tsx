import { useEffect } from "react";
import { Background } from "@/components/layout/Background";
import { Cursor } from "@/components/layout/Cursor";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  useEffect(() => {
    console.log(
      "%c⚡ Curious? Let's talk.",
      "color: #f59e0b; font-size: 14px; font-weight: bold;"
    );
  }, []);

  return (
    <>
      <Background />
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
