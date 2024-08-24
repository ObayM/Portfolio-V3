import LandingPage from "./components/landing";
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
export default function Home() {
  return (
    <div className="relative">
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
