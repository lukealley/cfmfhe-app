const announcements = [
  {
    id: 1,
    date: 'May 2026',
    title: 'Welcome to the CFM FHE App! 🎉',
    body: "We're so excited to have you here! This app is your one-stop place for all your Come Follow Me FHE lesson materials. Check back here for announcements, updates, and more.",
    highlight: true,
  },
  {
    id: 2,
    date: 'May 2026',
    title: 'The Vault is Live!',
    body: "Head over to The Vault tab to grab this month's special bonus resource — our gift to you. We LOVE our subscribers!",
    highlight: false,
  },
]

export default function Welcome() {
  return (
    <div className="px-4 py-6 space-y-5">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white px-5 py-6 shadow-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-100 mb-1">
          Come Follow Me
        </p>
        <h1 className="text-2xl font-extrabold leading-tight mb-2">
          Family Home Evening
        </h1>
        <p className="text-sm text-teal-100 leading-relaxed">
          Your partner in teaching Come, Follow Me at home — made by educators,
          loved by families.
        </p>
      </div>

      {/* Announcements */}
      <div>
        <h2 className="text-base font-bold text-gray-700 mb-3 px-1">
          Announcements &amp; Updates
        </h2>
        <div className="space-y-3">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl p-4 shadow-sm border ${
                item.highlight
                  ? 'bg-teal-50 border-teal-200'
                  : 'bg-white border-gray-100'
              }`}
            >
              <p className="text-xs font-semibold text-teal-500 mb-1">
                {item.date}
              </p>
              <h3 className="text-sm font-bold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
