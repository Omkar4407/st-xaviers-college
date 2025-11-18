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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 max-w-4xl"
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">History of the Science Stream</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Science stream at St. Xavier's College, Mumbai, was introduced in the <strong className="text-gray-900">1920s</strong>, marking a significant expansion of the college's academic offerings beyond liberal arts. The initial science departments established were <strong className="text-gray-900">Chemistry and Biology</strong>, which laid the foundation for the comprehensive science programs that exist today.
              </p>
              <p>
                This expansion was part of the college's growth under the leadership of Principal <strong className="text-gray-900">Frederick Dreckmann</strong>, who served from 1884 to 1910 and oversaw rapid development during his tenure. The introduction of science programs reflected the college's commitment to providing a well-rounded education and adapting to the evolving educational needs of students.
              </p>
              <p className="font-semibold text-gray-900">
                Today, the Science stream continues to thrive with 11 specialized programs, building on the foundation established nearly a century ago.
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

