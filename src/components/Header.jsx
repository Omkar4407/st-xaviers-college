import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/clg-logo.png"
              alt="St. Xavier's College Logo"
              className="h-10 sm:h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            {!isHomePage && (
              <span className="text-lg sm:text-xl font-serif font-bold text-white hidden sm:inline-block">
                St. Xavier's College
              </span>
            )}
          </Link>
          
          {!isHomePage && (
            <Link
              to="/"
              className="text-white/90 hover:text-white font-medium transition-colors text-sm sm:text-base"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

