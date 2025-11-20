import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TestTube, TrendingUp, Book, ChevronDown } from 'lucide-react'

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/college-photo.png)`,
            transform: 'scale(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {/* College Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <img
              src="/clg-logo.png"
              alt="St. Xavier's College Logo"
              className="mx-auto h-30 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-shadow-lg mb-4"
          >
            St. Xavier's College, Mumbai
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light"
          >
            (Empowered Autonomous Institute)
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/80"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Academic Streams Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center mb-12 sm:mb-16 text-gray-900"
        >
          Explore Our Academic Streams
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-12">
          {/* Science Card */}
          <StreamCard
            to="/science"
            title="SCIENCE"
            subtitle="11 Specialized Programs"
            icon={TestTube}
            bgImage="/sci-bg.png"
          />

          {/* Commerce Card */}
          <StreamCard
            to="/commerce"
            title="COMMERCE"
            subtitle="2 Strategic Programs"
            icon={TrendingUp}
            bgImage="/comm-bg.png"
          />

          {/* Arts Card */}
          <StreamCard
            to="/arts"
            title="ARTS"
            subtitle="13 Diverse Programs"
            icon={Book}
            bgImage="/arts-bg.png"
          />
        </div>
      </section>
    </div>
  )
}

function StreamCard({ to, title, subtitle, icon: Icon, bgImage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col mb-6 md:mb-0"
    >
      <Link
        to={to}
        className="block h-full min-h-[200px] sm:min-h-[240px] rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 transition-all duration-300" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8 sm:p-12 lg:p-14">
        </div>
      </Link>
      {/* Title below card */}
      <div className="mt-4 mb-4 text-center">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>
    </motion.div>
  )
}

export default HomePage

