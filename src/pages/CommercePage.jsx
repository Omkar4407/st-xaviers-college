import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CourseTree from '../components/CourseTree'

const commerceCourses = [
  { name: 'Commerce Evening', url: 'https://sites.google.com/xaviers.edu/commerce-evening' },
  { name: 'Economics', url: 'https://sites.google.com/xaviers.edu/economics' },
  { name: 'Commerce', url: 'https://sites.google.com/xaviers.edu/commerce-arts' },
  { name: 'Management Studies', url: 'https://sites.google.com/xaviers.edu/management-studies' },
]

function CommercePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Commerce</span>
        </nav>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brown mb-4">
            Commerce
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mb-6">
            Explore our comprehensive Commerce programs designed to foster innovation and excellence
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
            courses={commerceCourses}
            streamName="COMMERCE"
            streamColor="#8B4513"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default CommercePage

