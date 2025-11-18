import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function MindMap({ courses, streamName, streamColor }) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < 768
  const isTablet = windowSize.width >= 768 && windowSize.width < 1280

  // Calculate positions for courses in a circle
  const centerX = 0
  const centerY = 0
  // Adjust radius based on number of courses for better spacing
  const baseRadius = isMobile ? 180 : isTablet ? 220 : 280
  const radius = courses.length <= 2 ? baseRadius * 0.7 : baseRadius
  const angleStep = (2 * Math.PI) / courses.length

  const coursePositions = courses.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2 // Start from top
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle,
    }
  })

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      if (containerRef.current) {
        containerRef.current.lastPinchDistance = distance
      }
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    } else if (e.touches.length === 2) {
      // Pinch to zoom
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      
      if (containerRef.current?.lastPinchDistance) {
        const scaleChange = distance / containerRef.current.lastPinchDistance
        setScale((prev) => Math.max(0.5, Math.min(2, prev * scaleChange)))
      }
      if (containerRef.current) {
        containerRef.current.lastPinchDistance = distance
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.lastPinchDistance = null
    }
  }

  // Mouse handlers for desktop
  const handleMouseDown = (e) => {
    if (isMobile) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e) => {
    if (isMobile || !isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Wheel zoom for desktop
  const handleWheel = (e) => {
    if (isMobile) return
    e.preventDefault()
    const delta = e.deltaY * -0.001
    setScale((prev) => Math.max(0.5, Math.min(2, prev + delta)))
  }

  // Reset zoom and pan
  const resetView = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  // Handle course click
  const handleCourseClick = (course, index) => {
    if (isMobile) {
      // On mobile: first tap selects, second tap navigates
      if (selectedCourse === index) {
        window.open(course.url, '_blank')
      } else {
        setSelectedCourse(index)
      }
    } else {
      // On desktop: direct navigation
      window.open(course.url, '_blank')
    }
  }

  const nodeSize = isMobile ? 120 : isTablet ? 130 : 140

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={() => setScale((prev) => Math.min(2, prev + 0.1))}
          className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}
          className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          onClick={resetView}
          className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition-all text-xs"
          aria-label="Reset view"
        >
          ⟲
        </button>
      </div>

      {/* Mobile Instructions */}
      {isMobile && (
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-700 shadow-lg max-w-[200px]">
          <p className="font-semibold mb-1">Touch Controls:</p>
          <p>• Tap course to select</p>
          <p>• Tap again to open</p>
          <p>• Pinch to zoom</p>
          <p>• Drag to pan</p>
        </div>
      )}

      {/* SVG Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-move"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ touchAction: 'none' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="-400 -400 800 800"
          className="overflow-visible"
        >
          <g
            transform={`translate(${400 + position.x / scale}, ${400 + position.y / scale}) scale(${scale})`}
          >
            {/* Connection Lines */}
            {coursePositions.map((pos, index) => (
              <motion.line
                key={`line-${index}`}
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke={streamColor}
                strokeWidth={isMobile ? 3 : 2}
                strokeOpacity={0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            ))}

            {/* Central Node */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={isMobile ? 60 : isTablet ? 80 : 100}
              fill={streamColor}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-bold text-lg sm:text-xl lg:text-2xl"
              style={{ fontSize: isMobile ? '14px' : isTablet ? '18px' : '24px' }}
            >
              {streamName}
            </text>

            {/* Course Nodes */}
            {courses.map((course, index) => {
              const pos = coursePositions[index]
              const isSelected = selectedCourse === index
              
              return (
                <g key={index}>
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={nodeSize / 2}
                    fill={streamColor}
                    fillOpacity={isSelected ? 0.9 : 0.7}
                    stroke={isSelected ? '#fbbf24' : 'white'}
                    strokeWidth={isSelected ? 4 : 2}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isSelected ? 1.1 : 1,
                      opacity: 1,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    onClick={() => handleCourseClick(course, index)}
                    onTouchStart={() => handleCourseClick(course, index)}
                    className="cursor-pointer"
                    style={{ 
                      filter: isSelected ? 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))' : 'none'
                    }}
                  />
                  <foreignObject
                    x={pos.x - nodeSize / 2}
                    y={pos.y - nodeSize / 2}
                    width={nodeSize}
                    height={nodeSize}
                  >
                    <div className="flex items-center justify-center h-full text-center px-2">
                      <p 
                        className="text-white font-semibold text-xs sm:text-sm leading-tight pointer-events-none"
                        style={{ fontSize: isMobile ? '11px' : isTablet ? '13px' : '14px' }}
                      >
                        {course.name}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      {/* Course Info Modal for Mobile */}
      <AnimatePresence>
        {isMobile && selectedCourse !== null && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl p-6 z-30 max-h-[40vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {courses[selectedCourse].name}
              </h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <button
              onClick={() => {
                window.open(courses[selectedCourse].url, '_blank')
                setSelectedCourse(null)
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Visit Course Page
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MindMap

