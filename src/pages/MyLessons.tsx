import { currentLesson } from '../data/lessons'

export default function MyLessons() {
  return (
    <div className="px-4 py-6 space-y-5">
      {/* Lesson header */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white px-5 py-5 shadow-md">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-100 mb-0.5">
          {currentLesson.lessonNumber} · {currentLesson.dates}
        </p>
        <h1 className="text-lg font-extrabold leading-snug mb-1">
          {currentLesson.title}
        </h1>
        <p className="text-xs text-teal-100">{currentLesson.scripture}</p>
      </div>

      {/* Intro text */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 space-y-3">
        {currentLesson.intro.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm text-gray-600 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Bundle grid */}
      <div>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">
          This Week's Files
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {currentLesson.bundles.map((bundle) => (
            <a
              key={bundle.id}
              href={bundle.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl border border-gray-100 shadow-sm px-3 py-5 active:bg-teal-50 transition-colors"
            >
              <span className="text-4xl">{bundle.emoji}</span>
              <div className="text-center">
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {bundle.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{bundle.subtitle}</p>
              </div>
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                PDF
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
