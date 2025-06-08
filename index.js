// File: src/index.js import React from 'react'; import ReactDOM from 'react-dom/client'; import './index.css'; import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); root.render( <React.StrictMode> <App /> </React.StrictMode> );

// File: src/index.css @tailwind base; @tailwind components; @tailwind utilities;

// File: src/App.jsx import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Navbar from "./components/Navbar"; import Home from "./pages/Home"; import Projects from "./pages/Projects"; import About from "./pages/About"; import Join from "./pages/Join";

function App() { return ( <Router> <div className="bg-black text-white min-h-screen font-sans"> <Navbar /> <Routes> <Route path="/" element={<Home />} /> <Route path="/projects" element={<Projects />} /> <Route path="/about" element={<About />} /> <Route path="/join" element={<Join />} /> </Routes> </div> </Router> ); }

export default App;

// File: src/components/Navbar.jsx import { Link } from "react-router-dom";

const Navbar = () => (

  <nav className="bg-blue-900 p-4 flex justify-between items-center shadow-md">
    <h1 className="text-xl font-bold tracking-widest">INTERSHIP</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/projects" className="hover:text-blue-400">Our Projects</Link>
      <Link to="/about" className="hover:text-blue-400">About Us</Link>
      <Link to="/join" className="hover:text-blue-400">Join Us</Link>
    </div>
  </nav>
);export default Navbar;

// File: src/pages/Home.jsx const Home = () => (

  <section className="p-10 text-center space-y-6">
    <h2 className="text-4xl font-bold">Welcome to Intership</h2>
    <p className="text-lg max-w-xl mx-auto">A youth-powered hub for esports, game development, and community innovation.</p>
    <a href="https://discord.gg/kdtkednTjU" className="inline-block mt-4 px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">Join Our Discord</a>
  </section>
);export default Home;

// File: src/pages/Projects.jsx const Projects = () => { const items = [ { title: "Hand Kabaddi Bot", desc: "Unique raid-defense game on Discord." }, { title: "Intership Cricket", desc: "Flagship cricket community with tournaments." }, { title: "Website Services", desc: "Affordable web services for youth orgs." }, { title: "Hero Bot", desc: "Hero-based battle bot under development." }, ];

return ( <div className="p-8"> <h2 className="text-3xl font-semibold mb-6">Our Projects</h2> <div className="grid md:grid-cols-2 gap-6"> {items.map((p, i) => ( <div key={i} className="p-4 bg-blue-800 rounded-xl shadow-lg"> <h3 className="text-xl font-bold">{p.title}</h3> <p className="text-sm mt-2">{p.desc}</p> </div> ))} </div> </div> ); };

export default Projects;

// File: src/pages/About.jsx const About = () => (

  <section className="p-10 max-w-3xl mx-auto space-y-6">
    <h2 className="text-3xl font-bold">About Intership</h2>
    <p>Intership is more than a team—it's a movement. Started by passionate gamers and developers, we create bots, organize tournaments, and build online communities. Our servers include:</p>
    <ul className="list-disc list-inside">
      <li>Intership Cricket</li>
      <li>Cricket Lounge</li>
      <li>Handcricketer's Hub</li>
      <li>Virtual Simulation League</li>
    </ul>
    <p>We also represent our esports teams in tournaments under banners like K7 Elites, Intership FC, and Intership Rebellions.</p>
    <p className="italic">For partnerships: intershipdevelopment@gmail.com</p>
  </section>
);export default About;

// File: src/pages/Join.jsx const Join = () => (

  <section className="p-10 text-center space-y-6">
    <h2 className="text-3xl font-bold">Join the Intership Team</h2>
    <p>We're always looking for developers, community managers, esports players, and creatives.</p>
    <div className="space-y-3">
      <p>🚀 Want to build bots or games?</p>
      <p>🎮 Passionate about hosting or playing esports tournaments?</p>
      <p>💡 Got ideas to elevate communities?</p>
    </div>
    <a href="https://discord.gg/kdtkednTjU" className="inline-block mt-4 px-6 py-2 bg-green-600 rounded-xl hover:bg-green-700">Apply via Discord</a>
  </section>
);export default Join;

