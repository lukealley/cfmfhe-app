import { useState } from 'react'
import { pastLessons } from '../data/lessons'

export default function PastLessons() {
  const [search, setSearch] = useState('')

  const filtered = pastLessons.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      l.week.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="px-4 py-6 space-y-4">
      <div>
        <h1 className="text-xl font-extrabold text-gray-800">Past Lessons</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Revisit any lesson you may have missed
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Search lessons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-10">
            No lessons found.
          </p>
        ) : (
          filtered.map((lesson) => (
            <a
              key={lesson.id}
              href={lesson.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 active:bg-teal-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
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
              <span className="text-[10px] font-semibold text-gray-400 whitespace-nowrap">
                {lesson.week}
              </span>
              <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))
        )}
      </div>
    </div>
  )
}
