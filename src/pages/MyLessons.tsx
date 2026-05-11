import { currentLesson } from '../data/lessons'

export default function MyLessons() {
  return (
    <div className="px-5 py-7 space-y-6">
      {/* Lesson header */}
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-sage-500 mb-1">
          {currentLesson.lessonNumber} · {currentLesson.dates}
        </p>
        <h1 className="font-serif text-2xl font-semibold text-charcoal leading-snug mb-2">
          {currentLesson.title}
        </h1>
        <p className="text-xs text-gray-400">{currentLesson.scripture}</p>
        <div className="w-10 h-px bg-sand-300 mx-auto mt-3" />
      </div>

      {/* Intro text */}
      <div className="bg-white rounded-2xl border border-sand-200 shadow-sm px-5 py-5 space-y-3">
        {currentLesson.intro.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm text-gray-500 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Bundle grid */}
      <div>
        <h2 className="font-serif text-lg font-semibold text-charcoal mb-4">
          This Week's Files
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {currentLesson.bundles.map((bundle) => (
            <a
              key={bundle.id}
              href={bundle.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl border border-sand-200 shadow-sm px-3 py-6 active:bg-sage-100 transition-colors"
            >
              <span className="text-4xl">{bundle.emoji}</span>
              <div className="text-center">
                <p className="font-serif text-sm font-semibold text-charcoal leading-tight">
                  {bundle.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{bundle.subtitle}</p>
              </div>
              <span className="text-[10px] font-semibold text-sage-500 bg-sage-100 px-2.5 py-0.5 rounded-full">
                PDF
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
