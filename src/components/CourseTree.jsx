import { motion } from 'framer-motion'

function CourseTree({ courses, streamName, streamColor }) {
  const handleCourseClick = (url) => {
    window.open(url, '_blank')
  }

  // Use card-based grid layout for all screen sizes
  // Special layout for Commerce (2 courses)
  if (courses.length === 2) {
    return (
      <div className="w-full bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-8 md:mb-10"
        >
          <div
            className="mx-auto w-full max-w-xs md:max-w-sm rounded-2xl py-4 px-6 text-center shadow-lg"
            style={{ backgroundColor: streamColor }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{streamName}</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 150
              }}
              onClick={() => handleCourseClick(course.url)}
              className="cursor-pointer active:scale-95 transition-transform hover:scale-105"
            >
              <div
                className="rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-md hover:shadow-xl transition-shadow min-h-[100px] md:min-h-[120px] flex items-center justify-center"
                style={{ 
                  backgroundColor: streamColor,
                  opacity: 0.9
                }}
              >
                <p 
                  className="text-white font-serif font-semibold text-sm md:text-base leading-tight"
                >
                  {course.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Grid layout for Science and Arts (more than 2 courses)
  return (
    <div className="w-full bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        className="mb-6 md:mb-8"
      >
        <div
          className="mx-auto w-full max-w-xs md:max-w-sm rounded-2xl py-4 px-6 text-center shadow-lg"
          style={{ backgroundColor: streamColor }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">{streamName}</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.03,
              type: "spring",
              stiffness: 150
            }}
            onClick={() => handleCourseClick(course.url)}
            className="cursor-pointer active:scale-95 transition-transform hover:scale-105"
          >
            <div
              className="rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-center shadow-md hover:shadow-xl transition-shadow min-h-[90px] md:min-h-[110px] lg:min-h-[120px] flex items-center justify-center"
              style={{ 
                backgroundColor: streamColor,
                opacity: 0.85
              }}
            >
              <p 
                className="text-white font-serif font-semibold text-sm md:text-base leading-tight"
              >
                {course.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CourseTree
