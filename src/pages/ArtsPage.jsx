import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CourseTree from '../components/CourseTree'

const artsCourses = [
  { name: 'Ancient Indian History, Culture & Archeology', url: 'https://sites.google.com/xaviers.edu/aihca' },
  { name: 'Economics', url: 'https://sites.google.com/xaviers.edu/economics' },
  { name: 'Psychology', url: 'https://sites.google.com/xaviers.edu/psychology' },
  { name: 'Commerce', url: 'https://sites.google.com/xaviers.edu/commerce-arts' },
  { name: 'English', url: 'https://sites.google.com/xaviers.edu/english' },
  { name: 'French', url: 'https://sites.google.com/xaviers.edu/french' },
  { name: 'Hindi', url: 'https://sites.google.com/xaviers.edu/hindi' },
  { name: 'History', url: 'https://sites.google.com/xaviers.edu/history' },
  { name: 'Political Science', url: 'https://sites.google.com/xaviers.edu/political-science' },
  { name: 'Public Policy', url: 'https://sites.google.com/xaviers.edu/public-policy' },
  { name: 'Statistics', url: 'https://sites.google.com/xaviers.edu/statistics' },
  { name: 'Mass Media', url: 'https://sites.google.com/xaviers.edu/mass-media' },
  { name: 'Sociology & Anthropology', url: 'https://sites.google.com/xaviers.edu/sociology-anthropology' },
]

function ArtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Arts</span>
        </nav>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brown mb-4">
            Arts
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mb-6">
            Explore our comprehensive Arts programs designed to foster innovation and excellence
          </p>
          
          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 max-w-4xl"
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">History of the Arts Stream</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Arts stream is the foundation of St. Xavier's College, Mumbai, having been established at the college's inception. The college was founded on <strong className="text-gray-900">January 2, 1869</strong> by <strong className="text-gray-900">German Jesuits</strong>, initially offering courses in the arts.
              </p>
              <p>
                The first principal of the college was <strong className="text-gray-900">Fr. Depelchin</strong>, who led the institution in its formative years. The college was named after <strong className="text-gray-900">St. Francis Xavier</strong>, a 16th-century Spanish Jesuit saint who began the educational work of the Society of Jesus in India.
              </p>
              <p>
                The Arts stream has been the cornerstone of the college's educational mission for over 150 years, establishing the institution's reputation for academic excellence in the humanities and social sciences.
              </p>
              <p className="font-semibold text-gray-900">
                Today, the Arts stream continues to flourish with 13 diverse programs, maintaining the rich tradition of liberal arts education that has defined St. Xavier's College since its founding.
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
            courses={artsCourses}
            streamName="ARTS"
            streamColor="#8B4513"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default ArtsPage

