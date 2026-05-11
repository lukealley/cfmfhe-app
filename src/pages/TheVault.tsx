import vault from '../data/vault'

export default function TheVault() {
  return (
    <div className="px-5 py-7 space-y-6">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-sage-500 mb-1">
          Monthly Bonus
        </p>
        <h1 className="font-serif text-2xl font-semibold text-charcoal leading-snug">
          The Vault
        </h1>
        <div className="w-10 h-px bg-sand-300 mx-auto mt-3" />
      </div>

      {/* Resource card */}
      <div className="bg-white rounded-2xl border border-peach-200 shadow-sm overflow-hidden">
        <div className="bg-peach-100 px-5 pt-7 pb-5 text-center">
          <div className="text-5xl mb-4">{vault.emoji}</div>
          <p className="text-xs font-medium uppercase tracking-widest text-peach-400 mb-1">
            {vault.month}
          </p>
          <h2 className="font-serif text-xl font-semibold text-charcoal leading-snug">
            {vault.title}
          </h2>
        </div>
        <div className="px-5 py-5 space-y-4">
          <p className="text-sm text-gray-500 leading-relaxed text-center">
            {vault.description}
          </p>
          <a
            href={vault.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-sand-300 hover:bg-sand-400 text-charcoal font-semibold text-sm py-3.5 rounded-xl transition-colors"
          >
            Download My Resource →
          </a>
        </div>
      </div>

      {/* Love note */}
      <div className="bg-sage-100 border border-sage-200 rounded-2xl px-5 py-5 text-center">
        <p className="text-2xl mb-2">💛</p>
        <p className="font-serif text-base font-semibold text-charcoal mb-1">
          We LOVE our subscribers!
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          A fresh surprise bonus resource every month — our thank-you for being part of the CFM FHE family.
        </p>
      </div>
    </div>
  )
}
