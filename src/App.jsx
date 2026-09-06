
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EngineeringProjects from "./components/EngineeringProjects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CodingActivity from "./components/CodingActivity";
function App() {
  return (
    <ThemeProvider>
     <div className="min-h-screen overflow-hidden theme-bg theme-text">
        
      <div className="fixed inset-0 -z-10 bg-grid" />

      <div className="fixed -left-37.5 top-25 -z-10 h-100 w-100 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="fixed -right-37.5 top-125 -z-10 h-100 w-100 rounded-full bg-purple-600/10 blur-[120px]" />

      <Navbar />

      <main>
        <Hero />
        <CodingActivity />
        <About />
        <Skills />
        <Projects />
        <EngineeringProjects />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
    
    </ThemeProvider>


  );
}

export default App;