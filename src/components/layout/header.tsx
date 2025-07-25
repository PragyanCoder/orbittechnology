import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Github, Linkedin, GitBranch } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';

export function Header() {
  const { user, signOut } = useAuth();
  const { itemCount } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              {/* Orbit Technology Logo */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full transform group-hover:scale-105 transition-transform duration-300 animate-spin-slow">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Orbit rings */}
                      <div className="absolute w-8 h-8 border-2 border-white/60 rounded-full animate-pulse"></div>
                      <div className="absolute w-6 h-6 border-2 border-white/80 rounded-full animate-ping"></div>
                      <div className="absolute w-3 h-3 bg-white rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:bg-cyan-500/30 transition-colors duration-300"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Orbit
              </span>
              <span className="text-sm font-medium text-gray-500">Technology</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link to="/documentation" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Documentation
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://github.com/OrbitTechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/orbit-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://bitbucket.org/orbittechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="Bitbucket"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="https://gitlab.com/orbittechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="GitLab"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
                </svg>
              </a>
            </div>

            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-xs text-white animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="h-8 w-8 rounded-full" />
                  ) : (
                    <User className="h-6 w-6" />
                  )}
                  <span className="text-sm font-medium hidden md:inline">{user.displayName || user.email}</span>
                </div>
                <button 
                  onClick={() => signOut()} 
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500 h-9 px-4 text-sm"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/signin"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus-visible:ring-blue-500 h-9 px-4 text-sm"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      >
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full animate-spin-slow">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-6 h-6 border border-white/60 rounded-full"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Orbit
                </span>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <nav className="p-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleSidebar}
            >
              Services
            </Link>
            <Link
              to="/products"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleSidebar}
            >
              Products
            </Link>
            <Link
              to="/documentation"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleSidebar}
            >
              Documentation
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleSidebar}
            >
              Contact
            </Link>

            {/* Mobile Social Links */}
            <div className="pt-4 border-t">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/OrbitTechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/orbit-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://bitbucket.org/orbittechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <GitBranch className="h-5 w-5" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}