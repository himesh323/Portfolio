import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Interests } from '@/components/sections/Interests';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Journey } from '@/components/sections/Journey';
import { Certificates } from '@/components/sections/Certificates';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Journey />
      <Certificates />
      <Achievements />
      <Contact />
    </main>
  );
}
