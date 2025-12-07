// Main App Component - Portfolio Layout
import {
  Navbar,
  Hero,
  Projects,
  Experience,
  Education,
  OpenSource,
  Skills,
  Achievements,
  Certifications,
  Contact,
  Footer,
} from "./components/sections";
import { ScrollToTop } from "./components/common";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <OpenSource />
        <Achievements />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
