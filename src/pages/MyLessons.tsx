import { currentWeeks } from '../data/lessons'

export default function MyLessons() {
  return (
    <div className="px-4 py-6 space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-gray-800">My Lessons</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          This week's and next week's files
        </p>
      </div>

      {currentWeeks.map((week) => (
        <div key={week.label}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
              {week.label}
            </span>
          </div>
          <div className="space-y-2">
            {week.lessons.map((lesson) => (
              <a
                key={lesson.id}
                href={lesson.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 active:bg-teal-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate">
                    {lesson.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{lesson.subtitle}</p>
                </div>
                {lesson.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
