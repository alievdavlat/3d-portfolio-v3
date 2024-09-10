import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Clients from "./sections/Clients.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";
import { Helmet } from "react-helmet";
import { BackgroundBeams } from "./components/BackgroundBoxes.jsx";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Experienced Node.js, React.js & React Native Developer | Full-Stack Solutions</title>
        <meta name="description" content="Looking for a highly skilled Node.js, React.js, and React Native developer? I provide scalable, robust, and efficient full-stack web and mobile development solutions, tailored to your business needs." />
        <meta name="keywords" content="Node.js developer, React.js developer, React Native developer, full-stack developer, web development, mobile app development, REST APIs, scalable solutions, JavaScript developer" />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="Experienced Node.js, React.js & React Native Developer" />
        <meta property="og:description" content="Offering high-quality full-stack web and mobile development services." />
        <meta property="og:image" content="https://example.com/your-profile-picture.jpg" />
        <meta property="og:url" content="https://your-portfolio-website.com" />

      
        {/* <!-- Structured Data --> */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Your Name",
            "jobTitle": "Node.js, React.js & React Native Developer",
            "url": "https://your-portfolio-website.com",
            "sameAs": [
          "https:https://www.linkedin.com/in/mamurjonov-davlat-76762925b/",
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "description": "A professional full-stack web and mobile developer specializing in Node.js, React.js, and React Native. I build scalable, responsive web and mobile applications tailored to your needs."
          }
          `}
        </script>
      </Helmet>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
      
      <div className="w-full h-full inset-0 -z-10">
      <BackgroundBeams/> 
      </div>
    </>
  );
};

export default App;
