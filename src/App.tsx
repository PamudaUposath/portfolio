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
    </div>
  );
}

export default App;
