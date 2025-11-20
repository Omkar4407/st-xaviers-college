import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CourseTree from '../components/CourseTree'

const scienceCourses = [
  { name: 'Biotechnology', url: 'https://sites.google.com/xaviers.edu/biotechnology' },
  { name: 'Chemistry', url: 'https://sites.google.com/xaviers.edu/chemistry' },
  { name: 'Botany', url: 'https://sites.google.com/xaviers.edu/botany' },
  { name: 'Statistics', url: 'https://sites.google.com/xaviers.edu/statistics' },
  { name: 'Microbiology', url: 'https://sites.google.com/xaviers.edu/microbiology' },
  { name: 'Zoology', url: 'https://sites.google.com/xaviers.edu/zoology' },
  { name: 'Physics', url: 'https://sites.google.com/xaviers.edu/physics' },
  { name: 'Mathematics', url: 'https://sites.google.com/xaviers.edu/mathematics' },
  { name: 'Life Science & Biochemistry', url: 'https://sites.google.com/xaviers.edu/lifescience-biochemistry' },
  { name: 'Information Technology', url: 'https://itdept.xaviers.edu/' },
  { name: 'Geology', url: 'https://sites.google.com/xaviers.edu/geology' },
]

function SciencePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Science</span>
        </nav>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brown mb-4">
            Science
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mb-6">
            Explore our comprehensive Science programs designed to foster innovation and excellence
          </p>
          
          {/* History Section */}
          
        </motion.div>

        {/* Course Tree */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CourseTree
            courses={scienceCourses}
            streamName="SCIENCE"
            streamColor="#8B4513"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default SciencePage

