import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PlaceholderSection from "./components/PlaceholderSection.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main id="home">
        <Hero />
        <PlaceholderSection
          id="about"
          eyebrow="About"
          heading="Placeholder — about content goes here"
          body="This section is a stand-in for the developer's real bio: background, focus areas, and the kind of work they take on. Replace with actual copy before shipping."
        />
        <PlaceholderSection
          id="projects"
          eyebrow="Projects"
          heading="Placeholder — selected work goes here"
          body="This section is a stand-in for real project case studies (name, role, outcome, visuals). No projects have been invented — swap this block for actual work."
        />
        <PlaceholderSection
          id="contact"
          eyebrow="Contact"
          heading="Placeholder — contact details go here"
          body="This section is a stand-in for a real contact method (email, form, or booking link). Replace with the developer's actual contact info."
        />
      </main>
    </div>
  );
}
