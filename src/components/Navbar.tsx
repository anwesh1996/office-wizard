
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  logo: string;
}

const Navbar = ({ logo }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Account Tree" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-accounttree-primary">Account Tree</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-accounttree-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-accounttree-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-accounttree-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-accounttree-primary transition-colors">
              Contact
            </a>
            <Link to="/admin">
              <Button variant="outline" className="border-accounttree-primary text-accounttree-primary hover:bg-accounttree-light hover:text-accounttree-primary">
                Admin
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-accounttree-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-accounttree-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-accounttree-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-accounttree-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-accounttree-primary text-accounttree-primary">
                  Admin
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
