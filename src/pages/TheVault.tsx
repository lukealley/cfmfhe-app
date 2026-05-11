import vault from '../data/vault'

export default function TheVault() {
  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-extrabold text-gray-800">The Vault</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          A special bonus resource, just for you
        </p>
      </div>

      {/* Hero card */}
      <div className="rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-white shadow-md overflow-hidden">
        <div className="px-5 pt-6 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-100 mb-1">
            {vault.month}
          </p>
          <div className="text-5xl mb-3">{vault.emoji}</div>
          <h2 className="text-xl font-extrabold mb-2 leading-tight">
            {vault.title}
          </h2>
          <p className="text-sm text-yellow-100 leading-relaxed">
            {vault.description}
          </p>
        </div>
        <div className="px-5 pb-5 pt-2">
          <a
            href={vault.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white text-yellow-700 font-bold text-sm py-3 rounded-xl shadow active:opacity-90 transition-opacity"
          >
            Download My Resource →
          </a>
        </div>
      </div>

      {/* Love note */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl px-5 py-4 text-center">
        <p className="text-2xl mb-2">💛</p>
        <p className="text-sm font-semibold text-teal-700">
          We LOVE our subscribers!
        </p>
        <p className="text-xs text-teal-600 mt-1 leading-relaxed">
          Check back every month for a fresh surprise bonus resource—our thank-you
          for being part of the CFM FHE family.
        </p>
      </div>
    </div>
  )
}
