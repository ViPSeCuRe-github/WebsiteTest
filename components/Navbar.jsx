import { Link } from "react-router-dom";

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
