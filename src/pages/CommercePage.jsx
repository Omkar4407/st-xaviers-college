import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CourseTree from '../components/CourseTree'

const commerceCourses = [
  { name: 'Commerce Evening', url: 'https://sites.google.com/xaviers.edu/commerce-evening' },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 max-w-4xl"
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">History of the Commerce Stream</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Commerce stream at St. Xavier's College, Mumbai, is the most recent addition to the college's academic offerings. The Bachelor of Commerce program was introduced in the <strong className="text-gray-900">academic year 2022-2023</strong>, marking the college's expansion into business and commerce education.
              </p>
              <p>
                This addition reflects St. Xavier's College's continued commitment to adapting and broadening its educational scope to meet the evolving needs of students and the demands of the modern economy. The Commerce stream represents the college's forward-looking approach to education while maintaining its tradition of academic excellence.
              </p>
              <p className="font-semibold text-gray-900">
                Today, the Commerce stream offers 2 strategic programs, providing students with contemporary business education rooted in the college's long-standing values of excellence and integrity.
              </p>
            </div>
          </motion.div>
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

