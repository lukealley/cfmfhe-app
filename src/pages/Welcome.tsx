const announcements = [
  {
    id: 1,
    date: 'May 2026',
    title: 'Welcome to the CFM FHE App!',
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
    <div className="px-5 py-7 space-y-6">
      {/* Hero */}
      <div className="rounded-2xl bg-white border border-sand-200 shadow-sm px-6 py-7 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-sage-500 mb-2">
          Come Follow Me FHE
        </p>
        <h1 className="font-serif text-2xl font-semibold text-charcoal leading-snug mb-3">
          Teaching Families,<br />One Week at a Time
        </h1>
        <div className="w-10 h-px bg-sand-300 mx-auto mb-3" />
        <p className="text-sm text-gray-500 leading-relaxed">
          Your partner in teaching Come, Follow Me at home — made by educators, loved by families.
        </p>
      </div>

      {/* Announcements */}
      <div>
        <h2 className="font-serif text-lg font-semibold text-charcoal mb-4">
          Announcements
        </h2>
        <div className="space-y-3">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl px-5 py-4 border ${
                item.highlight
                  ? 'bg-sage-100 border-sage-200'
                  : 'bg-white border-sand-200 shadow-sm'
              }`}
            >
              <p className="text-xs font-medium text-sage-500 mb-1">{item.date}</p>
              <h3 className="font-serif text-base font-semibold text-charcoal mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
